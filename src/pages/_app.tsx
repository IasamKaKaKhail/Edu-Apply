import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Fragment, ReactElement, ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "@/theme";
import Head from "next/head";
import { NextPage } from "next";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { ApolloProvider } from "@apollo/client";
import { GqClient } from "@/graphql";
import { SnackbarProvider } from "notistack";
// import { createEmotionCache } from '@/utils';
// import { CacheProvider as EmotionCacheProvider } from '@emotion/react';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// const emotionCache = createEmotionCache();

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    // <EmotionCacheProvider value={emotionCache}>
    <Fragment>
      <Head>
        <title>EduApply</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Apply for higher studies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ApolloProvider client={GqClient}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <SnackbarProvider
              maxSnack={4}
              hideIconVariant
              autoHideDuration={3000}
            >
              <CssBaseline />
              {getLayout(<Component {...pageProps} />)}
            </SnackbarProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </ApolloProvider>
    </Fragment>
    // </EmotionCacheProvider>
  );
}
