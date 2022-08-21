import Hero from "./hero";
import Cta from "./cta";
import Info from "./info";
import Stats from "./stats";
import FeaturedClinics from "./featured-clinics";

import Context from "../../store/context";
import { useEffect, useContext, useState } from "react";

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
      <FeaturedClinics featuredClinics={props.featuredClinics}/>
      <Stats />
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
