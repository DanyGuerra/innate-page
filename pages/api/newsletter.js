import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const correo = req.body.correo.trim();

    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    }

    let fecha = new Date();
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZoneName: "short",
    };

    let fecharegistro =
      fecha.toLocaleDateString("es-MX", options) +
      " " +
      fecha.toLocaleTimeString("es-MX");

    if (!correo) {
      return res.sendStatus(400)({
        message: "Bad request",
      });
    }

    if (!isEmail(correo)) {
      return res.status(400).json({
        message: "Correo no válido",
      });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    //Auth client Object
    const authClientObject = await auth.getClient();

    //Google sheets instance
    const googleSheetsInstance = google.sheets({
      version: "v4",
      auth: authClientObject,
    });

    // spreadsheet id
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    try {
      await googleSheetsInstance.spreadsheets.values.append({
        auth, //auth object
        spreadsheetId, //spreadsheet id
        range: "A:C", //sheet name and range of cells
        valueInputOption: "USER_ENTERED", // The information will be passed according to what the usere passes in as date, number or text
        resource: {
          values: [[correo, fecharegistro]],
        },
      });

      res.status(200).json({
        message: "ok",
      });
    } catch (error) {
      res.status(500);
      console.error(error);
    }
  }
}
