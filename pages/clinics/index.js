//import { getClinics } from "../../lib/clinics-util";
import Clinics from "./../../components/clinics/clinics";
import Head from "next/head";
import { Fragment } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ClinicsPage = (props) => {
/*   const { clinics } = props;

  const parsedClinics = JSON.parse(clinics);
 */
  const { mdClinics } = props;

  const sortedClinics = mdClinics.sort((a, b) => (a.featured > b.featured) ? -1 : +1)


  if (!mdClinics) {
    return <p>Loading...</p>;
  }
  if (mdClinics) {
    return (
      <Fragment>
        <Head>
          <title>Clinics</title>
          <meta
            name="description"
            content="Find world-class doctors and experts qualified in hair transplant, aethetics, dental and much more in Turkey."
          />
        </Head>
        <Clinics clinics={sortedClinics} />
      </Fragment>
    );
  }
};

export default ClinicsPage;

export async function getStaticProps() {
  /*   const clinics = await getClinics();
  const clinicsConverted = JSON.stringify(clinics);
 */
  const files = fs.readdirSync(path.join("clinics"));
  const mdClinics = files.map((filename) => {
    //get slug
    //const slug = filename.replace(".md", "");

    //get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("clinics", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return frontmatter;
  });

  return {
    props: { /* clinics: clinicsConverted, */ mdClinics: mdClinics },
    revalidate: 86400, //dbye eklenen datalar 1 gün sonra yansıyacak
  };
}
