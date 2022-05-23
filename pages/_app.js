// import "../src/styles/globals.css";
const ThemeProvider = require("theme-ui");
// import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    // <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    // </ThemeProvider>
  );
}

export default MyApp;
