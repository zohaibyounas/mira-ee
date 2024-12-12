import React, { useEffect } from "react";
import Head from "next/head";
import appData from "@data/app.json";

import "../styles/scss/style.scss";
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
import { TranslateProvider } from "../contexts/TranslateContext";
import "../components/i18n";

// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <TranslateProvider>
      <Head>
        {/* seo begin */}
        <title>{appData.settings.siteName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="author" content="bslthemes" />
        {/* seo end */}
      </Head>
      <Component {...pageProps} />
    </TranslateProvider>
  );
}

export default MyApp;
