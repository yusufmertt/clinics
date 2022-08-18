import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { ClinicsContextProvider } from "./../store/clinics-context";
import { ContextProvider } from "../store/context";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <ClinicsContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ClinicsContextProvider>
    </ContextProvider>
  );
}

export default MyApp;
