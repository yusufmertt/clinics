import Head from "next/head";
import Image from "next/image";
import Landing from "./../components/landing/landing";
import Script from "next/script";
import { Fragment } from 'react';

function Home() {
  return (
    <Fragment>
      <Head>
        <title>FindClinicsTurkey-Best clinics in Turkey</title>
        <meta
          name="description"
          content="Find world-class doctors and experts qualified in hair transplant, aethetics, dental and much more in Turkey."
        />
      
      </Head>

      <main>
        <Landing />
      </main>
    </Fragment>
  );
}

/* export async function getStaticProps(){
  return {
    props:{

    }
  }
} */

export default Home;
