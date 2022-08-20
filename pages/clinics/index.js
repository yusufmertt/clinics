import { getClinics } from "../../lib/clinics-util";
import Clinics from "./../../components/clinics/clinics";
import Head from "next/head";
import { Fragment } from "react";

const ClinicsPage = (props) => {
  const { clinics } = props;

  const parsedClinics = JSON.parse(clinics);

  if (!clinics) {
    return <p>Loading...</p>;
  }
  if (clinics) {
    return (
      <Fragment>
        <Head>
          <title>Clinics</title>
          <meta
            name="description"
            content="Find world-class doctors and experts qualified in hair transplant, aethetics, dental and much more in Turkey."
          />
        </Head>
        <Clinics clinics={parsedClinics} />
      </Fragment>
    );
  }
};

export default ClinicsPage;

export async function getStaticProps() {
  const clinics = await getClinics();
  const clinicsConverted = JSON.stringify(clinics);

  return {
    props: { clinics: clinicsConverted },
    revalidate: 86400, //dbye eklenen datalar 1 gün sonra yansıyacak
  };
}

// Some kind of hero component ==> best clinics in Turkey.
// Filter component
// Search component
// Sort component
// Clinics component
//------clinic-item component under it
// Pagination component
