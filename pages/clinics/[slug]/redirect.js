import Link from "next/link";
//import { getClinics, getOneClinic } from "../../../lib/clinics-util";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function RedirectPage(props) {
//  const clinic = JSON.parse(props.clinic);

const clinic = props
  return (
    <div className="p-8 sm:p-16 text-center">
      <Link href={`/clinics/${clinic.slug}`}>
        <div className="flex p-3 text-brightPrimary hover:cursor-pointer hover:text-darkPrimary transition duration-200">
          <svg viewBox="0 0 50 50" fill="currentColor" className="h-7">
            <path
              d="M45.506,33.532c-1.741-7.42-7.161-17.758-23.554-19.942V7.047c0-1.364-0.826-2.593-2.087-3.113
		c-1.261-0.521-2.712-0.229-3.675,0.737L1.305,19.63c-1.739,1.748-1.74,4.572-0.001,6.32L16.19,40.909
		c0.961,0.966,2.415,1.258,3.676,0.737c1.261-0.521,2.087-1.75,2.087-3.113v-6.331c5.593,0.007,13.656,0.743,19.392,4.313
		c0.953,0.594,2.168,0.555,3.08-0.101C45.335,35.762,45.763,34.624,45.506,33.532z"
            />
          </svg>
          Go back
        </div>
      </Link>
      <h2 className="text-2xl uppercase text-red-600">Reminder!</h2>
      <p className="text-lg my-5">
        In order to get advantage of 10% discount, you should tell/write the clinic the
        <span className="text-red-600">&nbsp;referral code</span>. Or simply
        make a reservetion from our page.
      </p>
      <p className="text-brightPrimary mb-5">Code: FCT215</p>
      <div className="flex flex-col sm:flex-row justify-evenly">
        <div>
          <Link href={`/clinics/${clinic.slug}/reservation`}>
            <a className="text-white w-full uppercase text-center bg-brightPrimary font-semibold hover:bg-darkPrimary px-3 py-1.5 transition duration-200 rounded-lg">
              Make reservation from here
            </a>
          </Link>
        </div>
        <div className="mt-3 sm:mt-0">
          <div className="mb-5">
            <a
              href={clinic.frontmatter.website}
              target="_blank"
              rel="noreferrer"
              className="text-white w-full uppercase text-center bg-red-600 font-semibold hover:bg-red-700 px-3 py-1.5 transition duration-200 rounded-lg "
            >
              Continue to clinic website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedirectPage;

/* export async function getStaticProps(context) {
  const { params } = context; // context has params key (URL query)
  const { slug } = params;

  const clinic = await getOneClinic(slug);
  const serializableClinic = JSON.stringify(clinic);

  return {
    props: { clinic: serializableClinic },
    //revalidate: 400,
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