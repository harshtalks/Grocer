import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "../styles/globals.css";
import defaultTheme from "../styles/theme/theme";
import NextNProgress from "nextjs-progressbar";

import createEmotionCache from "../utils/createEmotionCache";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";
import darkTheme from "../styles/theme/darktheme";

const clientSideEmotionCache = createEmotionCache();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <NextNProgress color="#F9A109" />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
};

export default MyApp;
