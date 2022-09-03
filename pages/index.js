import Head from "next/head";
import Image from "next/image";
import Landing from "./../components/landing/landing";
import Script from "next/script";
import { Fragment } from "react";
//import { getFeaturedClinics } from "../lib/clinics-util";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function Home(props) {
  const { featuredClinics, popularProcedures, allProcedures, popularHT } = props;

  const sortedClinics = featuredClinics.sort((a, b) =>
    a.featured > b.featured ? -1 : +1
  );
  const sortedPopularProcedures = popularProcedures.sort((a, b) =>
    a.featured > b.featured ? -1 : +1
  );
  const sortedAllProcedures = allProcedures.sort((a, b) =>
    a.featured > b.featured ? -1 : +1
  );
  const popularHtSorted = popularHT.sort((a, b) =>
    a.featured > b.featured ? -1 : +1
  );
  return (
    <Fragment>
      <Head>
        <title>FindClinicsTurkey-Best clinics in Turkey</title>
        <meta
          name="description"
          content="Find world-class doctors and experts qualified in hair transplant, aesthetics, dental and much more in Turkey."
        />
      </Head>

      <main>
        <Landing
          featuredClinics={sortedClinics}
          popularProcedures={sortedPopularProcedures}
          allProcedures={sortedAllProcedures}
          popularHT={popularHtSorted}
        />
      </main>
    </Fragment>
  );
}

/* export async function getStaticProps() {
  const featuredClinics = await getFeaturedClinics();
  const jsonFeaturedClinics = JSON.stringify(featuredClinics)

  return {
    props: {
      featuredClinics: jsonFeaturedClinics,
    },
  };
}
 */
export async function getStaticProps() {
  const files = fs.readdirSync(path.join("featured-clinics"));
  const mdClinics = files.map((filename) => {
    //get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("featured-clinics", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return frontmatter;
  });
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const popularProceduresFiles = fs.readdirSync(
    path.join("popular-procedures")
  );
  const popularProcedures = popularProceduresFiles.map((filename) => {
    //get slug
    //const slug = filename.replace(".md", "");

    //get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("popular-procedures", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return frontmatter;
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const allProceduresfiles = fs.readdirSync(path.join("procedures"));
  const allProcedures = allProceduresfiles.map((filename) => {
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
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const popularHtFiles = fs.readdirSync(path.join("popular-ht"));
  const popularHT = popularHtFiles.map((filename) => {
    //get slug
    //const slug = filename.replace(".md", "");

    //get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("popular-ht", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return frontmatter;
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return {
    props: {
      /* clinics: clinicsConverted, */ featuredClinics: mdClinics,
      popularProcedures: popularProcedures,
      allProcedures: allProcedures,
      popularHT: popularHT,
    },
    revalidate: 86400, //dbye eklenen datalar 1 gün sonra yansıyacak
  };
}

export default Home;
