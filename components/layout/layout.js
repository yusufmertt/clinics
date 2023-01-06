import Navbar from "./navbar";
import Footer from "./footer";

import { useState, useContext, useEffect } from "react";
import Context from "../../store/context";

import FloatingWhatsApp from "react-floating-whatsapp";

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

  let chatMessage = `Hello there! 🤝 \nHow can I help you? `;

  return (
    <div className="flex flex-col h-screen justify-between all-container">
      <Navbar language={language} />

      <main className=" app flex-grow bg-bgWhite">{props.children}</main>
      {/* lg:px-28 m-5 xl:px-48 */}
      <FloatingWhatsApp
        className="z-50 h-0"
        phoneNumber="905431678206"
        accountName="FindClinicsTurkey"
        statusMessage="Usually replies within minutes"
        notification={true}
        avatar="/logo/mini-bg.jpg"
        //notificationSound
        chatMessage={chatMessage} //this will change according to language
      />
      <Footer />
    </div>
  );
};

export default Layout;
