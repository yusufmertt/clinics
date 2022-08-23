//import { getClinics, getOneClinic } from "../../../lib/clinics-util"

import ClinicDetails from "../../../components/clinic-details/clinic-details";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const ClinicDetailsPage = (props) => {
/*   const clinic = props.clinic
  const parsedClinic = JSON.parse(clinic)
 */
  return <ClinicDetails clinic={props}/>
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

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}

export default ClinicDetailsPage;
