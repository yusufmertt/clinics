/* export default function RedirectPage() {
}
export async function getStaticProps(context) {
  const { params } = context; // context has params key (URL query)
  const { slug } = params;

  const clinic = await getOneClinic(slug);
  const serializableClinic = JSON.stringify(clinic);

  return {
    props: { clinic: serializableClinic },
    revalidate: 400,
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
}
 */