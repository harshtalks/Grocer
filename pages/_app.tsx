import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "../styles/globals.css";
import defaultTheme from "../styles/theme/theme";
import NextNProgress from "nextjs-progressbar";

import createEmotionCache from "../utils/createEmotionCache";
import { AppProps } from "next/app";

const clientSideEmotionCache = createEmotionCache();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <NextNProgress color="#F9A109" />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
