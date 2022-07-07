const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const sucursal = req.body.sucursal;
    const source = req.body.source;

    let fecha = new Date();
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZoneName: "short",
    };

    let fechaRegistro =
      fecha.toLocaleDateString("es-MX", options) +
      " " +
      fecha.toLocaleTimeString("es-MX");

    const data = {
      name,
      email,
      phone,
      sucursal,
      source,
      fechaRegistro,
    };

    if (!email) {
      return res.status(404).json({ message: "Bad request" });
    }

    if (!isEmail(email)) {
      return res.status(400).json({
        message: "Correo no válido",
      });
    }

    try {
      const mail = await sendMail(data);
      res.status(200).json({ message: "ok" });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Bad request" });
    }
  }
}

const sendMail = (data) => {
  return new Promise((resolve, reject) => {
    let transport = nodemailer.createTransport({
      host: process.env.SEND_MAIL_HOST_MAIL,
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: process.env.SEND_MAIL_EMAIL,
        clientId: process.env.SEND_MAIL_CLIENT_ID,
        clientSecret: process.env.SEND_MAIL_CLIENT_SECRET,
        refreshToken: process.env.SEND_MAIL_REFRESH_TOKEN,
        accessToken: process.env.SEND_MAIL_ACCESS_TOKEN,
      },
    });

    let mailOptions = {
      from: `"Dany Guerra" <${process.env.SEND_MAIL_EMAIL}>`,
      to: process.env.SEND_CITAS_TO_THIS_MAIL,
      subject: "Cita agendada",
      text: "Confirmacion de cita",
      html: `Informacion de la cita: <br><br>
      <b>Nombre: </b> ${data.name}<br>
      <b>Correo: </b> ${data.email}<br>
      <b>Teléfono: </b> ${data.phone}<br>
      <b>Sucursal: </b> ${data.sucursal}<br>
      <b>Source: </b> ${data.source}<br>
      <b>Fecha de registro: </b> ${data.fechaRegistro}<br>
      `,
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
