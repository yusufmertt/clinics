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

function Landing(props) {
  const appCtx = useContext(Context);
  const [language, setLanguage] = useState("English");

  const [popularProcedures, setPopularProcedures] = useState(undefined);
  const [featuredClinics, setfeaturedClinics] = useState(undefined);

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
  }, []);

  return (
    <div>
      <Hero language={language} />
      <div className="sm:px-16 xl:px-48 xxl:px-60">
        <Search allProcedures={props.allProcedures} />
        {popularProcedures && (
          <PopularProcedures popularProcedures={popularProcedures} />
        )}
      </div>
      <div className="sm:px-16 xl:px-48 xxl:px-60">
        {featuredClinics && (
          <FeaturedClinics featuredClinics={featuredClinics} />
        )}
        <Images />
        {/*   <Stats /> */}
        <Info />
      </div>
      <Contracts />
      <Cta allProcedures={props.allProcedures} showPreferredClinics/>
    </div>
  );
}

export default Landing;

// hero
// some info
// some image gallery?
// CTA
