import Navbar from "./navbar";
import Footer from "./footer";

import { useState, useContext, useEffect } from "react";
import Context from "../../store/context";

const Layout = (props) => {
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
    <div className="flex flex-col h-screen justify-between all-container">
      <Navbar language={language} />
      <main className=" app flex-grow ">{props.children}</main>
      {/* lg:px-28 m-5 xl:px-48 */}
      <Footer />
    </div>
  );
};

export default Layout;
