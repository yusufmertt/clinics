import Hero from "./hero";
import Cta from "./cta";
import Info from "./info";
import Stats from "./stats";
import FeaturedClinics from "./featured-clinics";

import Context from "../../store/context";
import { useEffect, useContext, useState } from "react";
import Contracts from "./contracts";
import Search from "./search";
import Images from "./images";
import PopularProcedures from "./popular-procedures";
import PopularHT from "./popular-ht";
import Services from "./services";
import Testimonials from "./testimonials";


function Landing(props) {
  const appCtx = useContext(Context);
  const [language, setLanguage] = useState("English");

  const [popularProcedures, setPopularProcedures] = useState(undefined);
  const [featuredClinics, setfeaturedClinics] = useState(undefined);
  const [popularHtClinics, setPopularHtClinics] = useState(undefined);

  useEffect(() => {
    if (localStorage.getItem("language")) {
      const localLanguage = localStorage.getItem("language");
      const parsedLocalLanguage = JSON.parse(localLanguage);

      setLanguage(parsedLocalLanguage.label);
    }
  }, [appCtx]);

  useEffect(() => {
    // hydration error solve
    setPopularProcedures(props.popularProcedures);
    setfeaturedClinics(props.featuredClinics);
    setPopularHtClinics(props.popularHT);
  }, []);

  return (
    <>
    
     
      <Hero language={language} />
      <section className="sm:px-16 xl:px-36 xxl:px-48">
        <Search allProcedures={props.allProcedures} language={language} />
      </section>
      <Services language={language} />
      <Contracts language={language} />
      <section className="sm:px-16 xl:px-36 xxl:px-48">
        {popularProcedures && (
          <PopularProcedures
            popularProcedures={popularProcedures}
            language={language}
          />
        )}
      </section>
      {/*       <Testimonials/>
       */}
      <section className="sm:px-16 xl:px-36 xxl:px-48">
        {featuredClinics && (
          <FeaturedClinics
            featuredClinics={featuredClinics}
            language={language}
          />
        )}
        {/* <Images /> */}
        {/*   <Stats /> */}
        {/* <Info /> */}
        {popularHtClinics && (
          <PopularHT popularHT={popularHtClinics} language={language} />
        )}
      </section>
      <Cta
        allProcedures={props.allProcedures}
        showPreferredClinics
        language={language}
      />
    </>
  );
}

export default Landing;

// hero
// some info
// some image gallery?
// CTA
