import { useState, useContext, useEffect, useRef } from "react";
import ClinicsContext from "../../store/clinics-context";
import { useRouter } from "next/router";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function SearchInput2(props) {
  const { language } = props;
  const router = useRouter();

  //const [searchValue, setSearchValue] = useState("");
  const [allClinics, setAllClinics] = useState();
  const [filteredClinics, setFilteredClinics] = useState([]);

  const textRef = useRef();

  const features = [
    { name: "Hair transplant", id: "f1" },
    // { name: "IVF", id: "f2" },
    // { name: "Fat Removal", id: "f3" },
    { name: "Dental operations", id: "f4" },
    { name: "Esthetic surgeries", id: "f5" },
    { name: "Obesity Surgery", id: "f6" },
    { name: "Rhinoplasty (nose job)", id: "f7" },
    { name: "Breast operations", id: "f8" },
    { name: "Eye operations", id: "f9" },
    { name: "Liposuction", id: "f10" },
    { name: "BBL", id: "f11" },
    { name: "Plastic Surgeries", id: "f12" },
    { name: "Non-surgical Operations", id: "f13" },
  ];

  const locations = [
    { city: "All" },
    { city: "Istanbul" },
    { city: "Ankara" },
    { city: "Antalya" },
    { city: "Izmir" },
  ];

  const [checkbox, setCheckbox] = useState([
    { id: "f1", checked: false, feature: "Hair Transplant" },
    // { id: "f2", checked: false, feature: "IVF" },
    // { id: "f3", checked: false, feature: "Fat Removal" },
    { id: "f4", checked: false, feature: "Dental Operations" },
    { id: "f5", checked: false, feature: "Esthetic Surgeries" },
    { id: "f6", checked: false, feature: "Obesity Surgeries" },
    { id: "f7", checked: false, feature: "Rhinoplasty" },
    { id: "f8", checked: false, feature: "Breast Operations" },
    { id: "f9", checked: false, feature: "Eye Operations" },
    { id: "f10", checked: false, feature: "Liposuction" },
    { id: "f11", checked: false, feature: "BBL" },
    { id: "f12", checked: false, feature: "Plastic Surgeries" },
    { id: "f13", checked: false, feature: "Non-surgical Operations" },
  ]);

  const [trueCheckboxes, setTrueCheckboxes] = useState([]);

  const [city, setCity] = useState("");

  const clinicsCtx = useContext(ClinicsContext);

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  useEffect(() => {
    setOpen(1);
  }, []);

  useEffect(() => {
    if (clinicsCtx.clinics) {
      const allClinics = clinicsCtx.clinics;
      setAllClinics(allClinics);
    }
  }, [clinicsCtx]);

  useEffect(() => {
    setTrueCheckboxes(checkbox.filter((checkbox) => checkbox.checked === true));
  }, [checkbox]);

  function filterHandler(event) {
    event.preventDefault();

    const searchQuery = textRef.current.value;

    if (
      searchQuery === "" &&
      trueCheckboxes.length === 0 &&
      (!city || city === "All")
    ) {
      //add client side validation
      //clinicsCtx.setFilteredClinics(allClinics);
      clinicsCtx.setFilteredClinics(undefined);
      return;
    }
    if (
      trueCheckboxes.length > 0 &&
      searchQuery === "" &&
      (!city || city === "All")
    ) {
      const filteredArray = [];

      trueCheckboxes.forEach((checkbox) => {
        filteredArray.push(
          allClinics.filter((clinic) => {
            return clinic.features.find((feature) => {
              return feature === checkbox.feature;
            });
          })
        );
      });

      setFilteredClinics(filteredArray);

      clinicsCtx.setFilteredClinics(filteredArray);
    }
    if (
      trueCheckboxes.length === 0 &&
      searchQuery !== "" &&
      (!city || city === "All")
    ) {
      const filtered = allClinics.filter((clinic) =>
        clinic.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setFilteredClinics(filtered);
      //console.log(filtered);
      clinicsCtx.setFilteredClinics(filtered);
    }
    if (
      trueCheckboxes.length > 0 &&
      searchQuery !== "" &&
      (!city || city === "All")
    ) {
      const nameFiltered = allClinics.filter((clinic) =>
        clinic.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const filteredArray = [];

      trueCheckboxes.forEach((checkbox) => {
        filteredArray.push(
          nameFiltered.filter((clinic) => {
            return clinic.features.find((feature) => {
              return feature === checkbox.feature;
            });
          })
        );
      });
      setFilteredClinics(filteredArray);
      const newArray = filteredArray.flat();
      clinicsCtx.setFilteredClinics(newArray);
    }
    if (
      searchQuery === "" &&
      trueCheckboxes.length === 0 &&
      city !== "All" &&
      city
    ) {
      const filtered = allClinics.filter((clinic) =>
        clinic.location.toLowerCase().includes(city.toLowerCase())
      );
      setFilteredClinics(filtered);
      //console.log(filtered);
      clinicsCtx.setFilteredClinics(filtered);
    }
    if (
      searchQuery !== "" &&
      trueCheckboxes.length === 0 &&
      city !== "All" &&
      city
    ) {
      const nameFiltered = allClinics.filter((clinic) =>
        clinic.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      const cityFiltered = nameFiltered.filter((clinic) =>
        clinic.location.toLowerCase().includes(city.toLowerCase())
      );
      setFilteredClinics(cityFiltered);
      clinicsCtx.setFilteredClinics(cityFiltered);
    }
    if (
      searchQuery === "" &&
      trueCheckboxes.length !== 0 &&
      city !== "All" &&
      city
    ) {
      const cityFiltered = allClinics.filter((clinic) =>
        clinic.location.toLowerCase().includes(city.toLowerCase())
      );

      const filteredArray = [];

      trueCheckboxes.forEach((checkbox) => {
        filteredArray.push(
          cityFiltered.filter((clinic) => {
            return clinic.features.find((feature) => {
              return feature === checkbox.feature;
            });
          })
        );
      });
      setFilteredClinics(filteredArray);
      const newArray = filteredArray.flat();
      clinicsCtx.setFilteredClinics(newArray);
    }
    if (
      searchQuery !== "" &&
      trueCheckboxes.length !== 0 &&
      city !== "All" &&
      city
    ) {
      const nameFiltered = allClinics.filter((clinic) =>
        clinic.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      const cityFiltered = nameFiltered.filter((clinic) =>
        clinic.location.toLowerCase().includes(city.toLowerCase())
      );
      const filteredArray = [];

      trueCheckboxes.forEach((checkbox) => {
        filteredArray.push(
          cityFiltered.filter((clinic) => {
            return clinic.features.find((feature) => {
              return feature === checkbox.feature;
            });
          })
        );
      });
      setFilteredClinics(filteredArray);
      const newArray = filteredArray.flat();
      clinicsCtx.setFilteredClinics(newArray);
    }
  }

  function checkboxHandler(event) {
    const isChecked = event.target.checked;
    const id = event.target.id;

    setCheckbox((prevState) => {
      const selectedCheckbox = prevState.find((checkbox) => checkbox.id === id);
      selectedCheckbox.checked = isChecked;
      const newState = [...prevState];

      return newState;
    });
  }
  function clearHandler() {
    //clinicsCtx.setFilteredClinics(allClinics);
    clinicsCtx.setFilteredClinics(undefined);
    //router.reload(); // *******APP RELOAD**********
    return;
  }

  /*   const [sortOpen, setSortOpen] = useState(false);
  function sortDropdown() {
    setSortOpen((prev) => !prev);
  }
 */
  function cityChangeHandler(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form
        className="flex items-center"
        onSubmit={filterHandler}
        id="formSubmit"
      >
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            ref={textRef}
            //onChange={filterHandler}
            //value={searchValue}
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5 "
            placeholder="Search"
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ml-2 transition duration-200 text-sm font-medium text-white bg-brightPrimary rounded-lg border border-green-500 hover:bg-darkPrimary focus:ring-4 focus:outline-none focus:ring-green-300"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
      <div className="md:flex md:justify-between md:mt-2 md:items-baseline">
        <div className="bg-brightPrimary my-3 rounded-xl md:w-full flex px-4 text-white">
          <Accordion open={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="py-2">
              {(!language || language === "English") && "Filters"}
              {language === "German" && "Filter"}
              {language === "Arabic" && "منقي"}
              {language === "Hebrew" && "לְסַנֵן"}
              {language === "Russian" && "фильтр"}
              {language === "Spanish" && "Filtrar"}
              {language === "Italian" && "Filtro"}
            </AccordionHeader>
            <AccordionBody className="mt-2">
              <div className="md:grid md:grid-cols-4">
                {features.map((feature) => (
                  <div className="" key={feature.id}>
                    <input
                      id={`${feature.id}`}
                      type="checkbox"
                      onChange={checkboxHandler}
                      className="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 "
                    />
                    <label
                      htmlFor={`${feature.id}`}
                      className="ml-2 text-md font-semibold text-gray-100 my-0.5 uppercase"
                    >
                      {feature.name}
                    </label>
                  </div>
                ))}
              </div>
              <div className="w-full md:w-1/3 px-3 my-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  City
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    onChange={cityChangeHandler}
                  >
                    {locations.map((location) => {
                      return (
                        <option key={location.city}>{location.city}</option>
                      );
                    })}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={clearHandler}
                  className="px-3 py-2 mt-1 text-sm rounded-lg text-gray-300 hover:text-slate-200"
                >
                  {(!language || language === "English") && "Clear Filters"}
                  {language === "German" && "Klare Filter"}
                  {language === "Arabic" && "مسح عوامل التصفية"}
                  {language === "Hebrew" && "נקה מסננים"}
                  {language === "Russian" && "Очистить фильтры"}
                  {language === "Spanish" && "Borrar filtros"}
                  {language === "Italian" && "Cancella filtri"}
                </button>
                <button
                  onClick={filterHandler}
                  className="px-3 py-2 mt-1 text-sm rounded-lg text-brightPrimary bg-white hover:bg-slate-200 transition duration-200"
                >
                  {(!language || language === "English") && "Apply Filters"}
                  {language === "German" && "Filter anwenden"}
                  {language === "Arabic" && "تطبيق المرشحات"}
                  {language === "Hebrew" && "החל מסננים"}
                  {language === "Russian" && "Применить фильтры"}
                  {language === "Spanish" && "Aplicar filtros"}
                  {language === "Italian" && "Applica filtri"}
                </button>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
        {/*   <div className="">
          <button
            id="dropdownRadioButton"
            data-dropdown-toggle="dropdownDefaultRadio"
            className="text-white bg-green-500 hover:bg-green-700 transition duration-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
            onClick={sortDropdown}
          >
            Sort
            <svg
              className="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            id="dropdownDefaultRadio"
            className={`${sortOpen && "absolute"} ${
              !sortOpen && "hidden"
            } z-10 w-48 mt-2 bg-white rounded divide-y divide-gray-100 shadow`}
          >
            <ul
              className="p-3 space-y-3 text-sm text-gray-700 "
              aria-labelledby="dropdownRadioButton"
            >
              <li>
                <div className="flex items-center">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 "
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Default radio
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 "
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="ml-2 text-sm font-medium text-gray-900 "
                  >
                    Checked state
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input
                    id="default-radio-3"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 "
                  />
                  <label
                    htmlFor="default-radio-3"
                    className="ml-2 text-sm font-medium text-gray-900 "
                  >
                    Default radio
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
      {clinicsCtx.filteredClinics && (
        <p className="text-right">
          {clinicsCtx.filteredClinics.length} Total Clinics Listed
        </p>
      )}
      {!clinicsCtx.filteredClinics && clinicsCtx.clinics && (
        <p className="text-right">{clinicsCtx.clinics.length} Total Clinics Listed</p>
      )}
    </div>
  );
}
