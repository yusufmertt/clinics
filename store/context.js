import { createContext, useState, useEffect } from "react";

const Context = createContext({
  //set initial states (just for IDE better auto-compilation --> dummy data)
  language: "English",
  setLanguage() {},
});

export function ContextProvider(props) {
  //const [isSubmitting, setIsSubmitting] = useState(false);
  const [language, setLanguage] = useState();

  const languageHandler = (language) => {
    setLanguage(language);
  };

  const context = {
    language: language,
    setLanguage: languageHandler,
  };

  //wrap with this
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
}

export default Context;
