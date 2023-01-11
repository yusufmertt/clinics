import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { ClinicsContextProvider } from "./../store/clinics-context";
import { ContextProvider } from "../store/context";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import React, { useState, useEffect } from "react";
config.autoAddCss = false;

import Script from "next/script";
import Head from "next/head";

import Modal from "react-modal";
import Link from "next/link";
import Image from "next/image";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-40%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
  },
};

function MyApp({ Component, pageProps }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    let timer1 = setTimeout(() => openModal(), 1000);

    // this will clear Timeout
    // when component unmount like in willComponentUnmount
    // and show will not change to true
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <ContextProvider>
      <ClinicsContextProvider>
        <Layout>
          <div onClick={closeModal}>
            <Modal
              isOpen={modalIsOpen}
              shouldCloseOnOverlayClick
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
              <div>
                <Link href={`/contact`}>
                  <a href="#">
                    <Image
                      className="rounded-t-lg"
                      src={"/offer.png"}
                      alt=""
                      width={600}
                      height={600}
                    />
                  </a>
                </Link>
              </div>
              <div className="flex justify-around my-2">
                <Link href="/contact">
                  <a
                  href="#"
                    className="bg-brightPrimary text-slate-100 py-2 px-4 rounded-2xl transition-colors hover:bg-darkPrimary"
                    onClick={closeModal}
                  >
                    Learn More!
                  </a>
                </Link>
                <button
                  className="bg-red-500 text-slate-100 py-2 px-4 rounded-2xl transition-colors hover:bg-red-600"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </Modal>
          </div>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/images/icons/icon.png" />
          </Head>

          {/* 
          <GoogleAnalytics /> */}

          {/* <Script
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
          </Script> */}
          <Component {...pageProps} />
        </Layout>
      </ClinicsContextProvider>
    </ContextProvider>
  );
}

export default MyApp;
