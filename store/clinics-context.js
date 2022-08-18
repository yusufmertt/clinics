import { createContext, useState, useEffect } from "react";

const ClinicsContext = createContext({
  //set initial states (just for IDE better auto-compilation --> dummy data)
  clinics: {},
  submitClinicsHandler() {},
  filteredClinics: {},
  setFilteredClinics() {},
});

export function ClinicsContextProvider(props) {
  //const [isSubmitting, setIsSubmitting] = useState(false);
  const [clinics, setClinics] = useState();
  const [filteredClinics, setFilteredClinics] = useState();

  const clinicsHandler = (clinics) => {
    setClinics(clinics);
  };

  const filterClinicsHandler = (filteredClinics) => {
    if (filteredClinics !== undefined) {
      const newArray = Array.prototype.concat.apply([], filteredClinics);
      const newArray2 = newArray.reduce(function (a, b) {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
      }, []);
      setFilteredClinics(newArray2);
    }else{
      setFilteredClinics(filteredClinics)
    }
  };

  const context = {
    clinics: clinics,
    submitClinicsHandler: clinicsHandler,
    filteredClinics: filteredClinics,
    setFilteredClinics: filterClinicsHandler,
  };

  //wrap with this
  return (
    <ClinicsContext.Provider value={context}>
      {props.children}
    </ClinicsContext.Provider>
  );
}

export default ClinicsContext;
