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

  useEffect(() => {
    if (localStorage.getItem("language")) {
      const localLanguage = localStorage.getItem("language");
      const parsedLocalLanguage = JSON.parse(localLanguage);

      setLanguage(parsedLocalLanguage.label);
    }
  }, [appCtx]);

  return (
    <div>
      <Hero language={language} />
      <Search />
      <PopularProcedures popularProcedures={props.popularProcedures} />
      <FeaturedClinics featuredClinics={props.featuredClinics} />
      <Images />
      {/*   <Stats /> */}
      {/*  <Contracts/> */}
      <Info />
      <Cta />
    </div>
  );
}

export default Landing;

// hero
// some info
// some image gallery?
// CTA
