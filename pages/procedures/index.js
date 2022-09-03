//import { getClinics } from "../../lib/clinics-util";
import Clinics from "./../../components/clinics/clinics";
import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Procedures from "../../components/procedures/procedures";

const ProceduresPage = (props) => {
  /*   const { clinics } = props;

  const parsedClinics = JSON.parse(clinics);
 */
  const { procedures } = props;

  //const sortedClinics = mdClinics.sort((a, b) => (a.featured > b.featured) ? -1 : +1)
  const sortedProcedures = procedures.sort((a, b) => (a.featured > b.featured) ? -1 : +1)

  const [proceduresState,setProceduresState] = useState(undefined)

  useEffect(()=>{
    setProceduresState(sortedProcedures)
  },[])

  if (!proceduresState) {
    return <p>Loading...</p>;
  }
  if (proceduresState) {
    return (
      <Fragment>
        <Head>
          <title>Procedures</title>
          <meta
            name="description"
            content="Find world-class doctors and experts qualified in hair transplant, aethetics, dental and much more in Turkey."
          />
        </Head>
        <Procedures procedures={proceduresState}/>
      </Fragment>
    );
  }
};

export default ProceduresPage;

export async function getStaticProps() {
  /*   const clinics = await getClinics();
  const clinicsConverted = JSON.stringify(clinics);
 */
  const files = fs.readdirSync(path.join("procedures"));
  const procedures = files.map((filename) => {
    //get slug
    //const slug = filename.replace(".md", "");

    //get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("procedures", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return frontmatter;
  });

  return {
    props: { /* clinics: clinicsConverted, */ procedures },
    revalidate: 86400, //dbye eklenen datalar 1 gün sonra yansıyacak
  };
}
