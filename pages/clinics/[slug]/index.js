//import { getClinics, getOneClinic } from "../../../lib/clinics-util"

import ClinicDetails from "../../../components/clinic-details/clinic-details";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const ClinicDetailsPage = (props) => {
/*   const clinic = props.clinic
  const parsedClinic = JSON.parse(clinic)
 */
  const sortedAllProcedures = props.allProcedures.sort((a, b) =>
    a.featured > b.featured ? -1 : +1
  );
  return <ClinicDetails clinic={props} allProcedures={sortedAllProcedures}/>
};

/* export async function getStaticProps(context) {
  const { params } = context; // context has params key (URL query)
  const { slug } = params;

  const clinic = await getOneClinic(slug);
  const serializableClinic = JSON.stringify(clinic)

  return {
    props: {clinic:serializableClinic},
    revalidate: 86400,
  };
}

export async function getStaticPaths() {
  const clinics = await getClinics();
  //const clinicsConverted = JSON.stringify(clinics);

  const slugs = clinics.map((clinic) => clinic.slug);
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
} */

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('clinics'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('clinics', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)


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

  return {
    props: {
      frontmatter,
      slug,
      content,
      allProcedures
    },
  }
}

export default ClinicDetailsPage;
