import Head from "next/head";
import Image from "next/image";
import Landing from "./../components/landing/landing";
import Script from "next/script";
import { Fragment } from "react";
import { getFeaturedClinics } from "../lib/clinics-util";

function Home(props) {
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
        <Landing featuredClinics={props.featuredClinics}/>
      </main>
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredClinics = await getFeaturedClinics();
  const jsonFeaturedClinics = JSON.stringify(featuredClinics)

  return {
    props: {
      featuredClinics: jsonFeaturedClinics,
    },
  };
}

export default Home;
