//import { getClinics, getOneClinic } from "../../../lib/clinics-util"
import { useContext, useState, useEffect, Fragment } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ClinicItemNew from "../../../components/clinics/clinic-item-new";
import Context from "../../../store/context";
import Head from "next/head";
import Image from "next/image";
import GoBack from "../../../components/ui/go-back";

const ProcedureDetailsPage = (props) => {
  const { clinics, frontmatter, filteredClinicsArray } = props;
  const appCtx = useContext(Context);
  const [language, setLanguage] = useState("English");

  const sortedClinics = filteredClinicsArray.sort((a, b) =>
    a.featured > b.featured ? -1 : +1
  );

  useEffect(() => {
    if (localStorage.getItem("language")) {
      const localLanguage = localStorage.getItem("language");
      const parsedLocalLanguage = JSON.parse(localLanguage);

      setLanguage(parsedLocalLanguage.label);
    }
  }, [appCtx]);

 
  if (!filteredClinicsArray) {
    return <p>Loading</p>;
  } else {
    return (
      <Fragment>
        <Head>
          <title>{frontmatter.name}</title>
          <meta
            name="description"
            content={`Find best doctors qualified in ${frontmatter.name}.`}
          />
        </Head>
        <GoBack allPage />
        <div className="lg:px-28 m-5 xl:px-48 xxl:px-48">
          <h1 className="text-xl mb-4 font-bold">{frontmatter.title}</h1>
          {/*  <div className="flex flex-col sm:flex-row mb-8">
        <Image src={frontmatter.coverImage} width={600} height={200}/>
        <p>{props.content}</p>
        </div> */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 mt-3">
            {sortedClinics.map((clinic) => {
              return (
                <ClinicItemNew
                  showBadges={false}
                  key={clinic.slug}
                  clinicData={clinic}
                  language={language}
                />
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
  //<ClinicDetails clinic={props}/>
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("procedures"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("procedures", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  ////////////////

  const clinicFiles = fs.readdirSync(path.join("clinics"));
  const clinics = clinicFiles.map((filename) => {
    //get slug
    //const slug = filename.replace(".md", "");

    //get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("clinics", filename),
      "utf-8"
    );

    const { data: clinicFrontmatter } = matter(markdownWithMeta);

    return clinicFrontmatter;
  });

  const filteredClinicsArray = [];

  const filteredClinics = clinics.map((clinic) => {
    if (clinic.features.includes(frontmatter.name)) {
      filteredClinicsArray.push(clinic);
    }
  });

  return {
    props: {
      filteredClinicsArray,
      clinics,
      frontmatter,
      slug,
      content,
    },
  };
}

export default ProcedureDetailsPage;
