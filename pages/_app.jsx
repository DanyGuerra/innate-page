import "../src/styles/globals.css";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import { jsx } from "theme-ui";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
