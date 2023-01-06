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
        {/* <p>
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
        </p> */}
        <p>
          Welcome to our agency specializing in health tourism, with a focus on
          cosmetic surgeries in Turkey. Our team of experienced professionals is
          dedicated to assisting you in finding the best clinics and healthcare
          providers, and making the process as smooth and seamless as possible.
          From appointment scheduling to transportation and accommodation
          arrangements, we take care of all the details. Contact us with any
          questions and let us help you achieve your cosmetic goals.
        </p>
      </section>
    </Fragment>
  );
}
