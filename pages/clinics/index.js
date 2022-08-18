import { getClinics } from "../../lib/clinics-util";
import Clinics from "./../../components/clinics/clinics";

const ClinicsPage = (props) => {
  const { clinics } = props;

  const parsedClinics = JSON.parse(clinics);

  if (!clinics) {
    return <p>Loading...</p>;
  }
  if (clinics) {
    return <Clinics clinics={parsedClinics} />;
  }
};

export default ClinicsPage;

export async function getStaticProps() {
  const clinics = await getClinics();
  const clinicsConverted = JSON.stringify(clinics);

  return {
    props: { clinics: clinicsConverted },
    revalidate: 86400,  //dbye eklenen datalar 1 gün sonra yansıyacak
  };
}

// Some kind of hero component ==> best clinics in Turkey.
// Filter component
// Search component
// Sort component
// Clinics component
//------clinic-item component under it
// Pagination component
