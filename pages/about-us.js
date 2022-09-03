import { Fragment } from "react";
import Head from "next/head";

export default function AboutUsPage() {
  return (
    <Fragment>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Contact us to find clinics in Turkey."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="py-10 px-16 text-center">
        <h1 className="text-3xl font-bold uppercase text-center mb-10">
          About Us
        </h1>
        <p>
          We are a group of entrepreneurs including an engineer a medical
          student and couple of people with experience of 10+ years in the
          health tourism. We&apos;ve previously helped people finding clinics in
          Turkey as an agency, now switched to website approach.
        </p>
        <h2 className="text-2xl font-bold uppercase text-center my-10">
          Our Mission
        </h2>
        <p>
          With cost and quality, Turkey is one of the five world&apos;s leading
          health toursim countries. Our mission is helping people finding
          perfect clinic for their treatment and make the process as smooth as
          possible.
        </p>
      </section>
    </Fragment>
  );
}
