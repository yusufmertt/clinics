import { useEffect, useState, useContext, useRef, Fragment } from "react";
import Context from "../../store/context";

import Menu from "../clinic-menu/menu";
import { useRouter } from "next/router";

import ClinicsContext from "../../store/clinics-context";
import ClinicItemNew from "./clinic-item-new";

import { Pagination } from "@mantine/core";

const Clinics = (props) => {
  const appCtx = useContext(Context);
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    if (localStorage.getItem("language")) {
      const localLanguage = localStorage.getItem("language");
      const parsedLocalLanguage = JSON.parse(localLanguage);

      setLanguage(parsedLocalLanguage.label);
    }
  }, [appCtx]);

  const router = useRouter();

  const isMounted = useRef(false);

  const [clinics, setClinics] = useState([]);
  const [filteredClinics, setFilteredClinics] = useState([]);

  //const [isLoading, setIsLoading] = useState(true);

  const clinicsCtx = useContext(ClinicsContext);

  const [filteredMode, setFilteredMode] = useState(false);

  useEffect(() => {
    async function setClinicsFunction() {
      setClinics(props.clinics);

      clinicsCtx.submitClinicsHandler(props.clinics);
      // add clinics to context
    }
    async function setFilteredClinicsFunction() {
      setFilteredClinics(clinicsCtx.filteredClinics);
    }
    setClinicsFunction();
    setFilteredClinicsFunction();
  }, [clinicsCtx, props.clinics]);

  useEffect(() => {
    if (clinicsCtx.filteredClinics === undefined) {
      setFilteredMode(false);
    } else {
      setFilteredMode(true);
    }
  }, [clinicsCtx]);

  useEffect(() => {
    if (isMounted.current) {
    } else {
      isMounted.current = true;
      clinicsCtx.setFilteredClinics(undefined);
    }
  }, [clinicsCtx]); //
  function clearHandler() {
    //clinicsCtx.setFilteredClinics(allClinics);
    //router.reload(); // *******APP RELOAD**********
    clinicsCtx.setFilteredClinics(undefined);

    return;
  }

  //Pagination
  const [pageCount, setPageCount] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentAllClinics = clinics.slice(indexOfFirstPost, indexOfLastPost);

  let currentFilteredClinics;
  if (filteredMode) {
    currentFilteredClinics = filteredClinics.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
  }

  useEffect(() => {
    if (!filteredMode) {
      const pageNumbersAllClinics = [];

      for (let i = 1; i <= Math.ceil(clinics.length / postsPerPage); i++) {
        pageNumbersAllClinics.push(i);
      }

      const pageNumberAllClinics =
        pageNumbersAllClinics[pageNumbersAllClinics.length - 1];

      setPageCount(pageNumberAllClinics);
    } else {
      const pageNumbersFilteredClinics = [];

      for (
        let i = 1;
        i <= Math.ceil(filteredClinics.length / postsPerPage);
        i++
      ) {
        pageNumbersFilteredClinics.push(i);
      }
      const pageNumberFilteredClinics =
        pageNumbersFilteredClinics[pageNumbersFilteredClinics.length - 1];

      setPageCount(pageNumberFilteredClinics);
    }
  }, [clinicsCtx, filteredMode]);

  //only clinicsCtx and filteredMode

  /* let pageNumberFilteredClinics;
    if (pageNumberFilteredClinics) {
      pageNumberFilteredClinics =
        pageNumberFilteredClinics[pageNumberFilteredClinics.length - 1];
    }

    if (filteredClinics.length>0) {
      setPageCount(pageNumberFilteredClinics);
    } else {
      setPageCount(pageNumberAllClinics);
    } */

  useEffect(() => {
    setCurrentPage(1);
  }, [clinicsCtx]);

  return (
    <div className="lg:px-28 m-5 xl:px-48 xxl:px-48">
      <div>
        <Menu language={language} />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 mt-3">
        {clinicsCtx.filteredClinics &&
          currentFilteredClinics &&
          filteredClinics &&
          clinicsCtx.filteredClinics.length > 0 && (
            <Fragment>
              {/* Results(Filtered) */}
              {currentFilteredClinics.map((clinic) => (
                <ClinicItemNew
                  showBadges
                  key={clinic.slug}
                  clinicData={clinic}
                  language={language}
                />
              ))}
            </Fragment>
          )}
        {clinicsCtx.filteredClinics &&
          !filteredClinics && ( //FOR INITIAL FLICKER
            <Fragment>
              {/* Initial Flicker (loading) */}
              {clinics.map((clinic) => (
                <ClinicItemNew
                  showBadges
                  key={clinic.slug}
                  clinicData={clinic}
                  language={language}
                />
              ))}
            </Fragment>
          )}
        {!clinicsCtx.filteredClinics && currentAllClinics && (
          <Fragment>
            {/* Results(Not Filtered) */}
            {currentAllClinics.map((clinic) => (
              <ClinicItemNew
                showBadges
                key={clinic.slug}
                clinicData={clinic}
                language={language}
              />
            ))}
          </Fragment>
        )}
      </div>
      {clinicsCtx.filteredClinics && clinicsCtx.filteredClinics.length === 0 && (
        <p className="text-center mt-5">
          No clinic found! Please try again.
          <button
            onClick={clearHandler}
            className="px-3 py-2 mt-1 text-sm rounded-lg text-green-500 hover:text-green-700"
          >
            Clear Filters
          </button>
        </p>
      )}
      <div className="mt-6 flex justify-center">
        <Pagination
          page={currentPage}
          onChange={setCurrentPage}
          total={pageCount}
          color="grape"
        />
      </div>
    </div>
  );
};

export default Clinics;
