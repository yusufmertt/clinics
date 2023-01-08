import { Fragment } from "react";
import Head from "next/head";
import Content from "./../content-files/about-us/about-us.json";
import Context from "./../store/context";
import { useState, useEffect, useContext } from "react";


const h1 = Content.filter((ele) => ele.name == "h1");
const text = Content.filter((ele) => ele.name == "text");

export default function AboutUsPage() {
  const appCtx = useContext(Context);
  const [language, setLanguage] = useState("English");
  useEffect(() => {
    if (localStorage.getItem("language")) {
      const localLanguage = localStorage.getItem("language");
      const parsedLocalLanguage = JSON.parse(localLanguage);

      setLanguage(parsedLocalLanguage.label);
    }
  }, [appCtx]);

  return (
    <Fragment>
      <Head>
        <title> {h1[0][language]}</title>
        <meta
          name="description"
          content="Contact us to find clinics in Turkey."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="py-10 px-16 text-center">
        <h1 className="text-3xl font-bold uppercase text-center mb-10">
        {h1[0][language]}
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
        <p>{text[0][language]}</p>
      </section>
    </Fragment>
  );
}
