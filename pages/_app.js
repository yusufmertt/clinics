import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { ClinicsContextProvider } from "./../store/clinics-context";
import { ContextProvider } from "../store/context";
import { GoogleAnalytics } from "nextjs-google-analytics";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import React from "react";
config.autoAddCss = false;

import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <ClinicsContextProvider>
        <Layout>
          {/* 
          <GoogleAnalytics /> */}
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9235140354760044"
            crossorigin="anonymous"
          ></Script>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-HW23HL84Q5`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-HW23HL84Q5');
    `}
          </Script>
          <Component {...pageProps} />
        </Layout>
      </ClinicsContextProvider>
    </ContextProvider>
  );
}

export default MyApp;
