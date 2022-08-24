import Reservation from "../../../components/clinic-details/reservation";
//import { getClinics, getOneClinic } from "../../../lib/clinics-util";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function ReservationPage(props) {
  return <Reservation clinic={props} />;
}

export default ReservationPage;

/* export async function getStaticProps(context) {
    const { params } = context; // context has params key (URL query)
    const { slug } = params;
  
    const clinic = await getOneClinic(slug);
    const serializableClinic = JSON.stringify(clinic)
  
    return {
      props: {clinic:serializableClinic},
      //revalidate: 86400,
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
  const files = fs.readdirSync(path.join("clinics"));

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
    path.join("clinics", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
