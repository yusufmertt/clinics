import { useRouter } from "next/router";
import { useRef } from "react";
import Content from "./../../content-files/landing/search.json";

const h2 = Content.filter((ele) => ele.name == "h2");
const p_1 = Content.filter((ele) => ele.name == "p_1");
const p_2 = Content.filter((ele) => ele.name == "p_2");
const btn = Content.filter((ele) => ele.name == "btn");

export default function Search(props) {
  const { allProcedures, language } = props;

  const router = useRouter();

  const treatmentRef = useRef();
  function searchHandler(event) {
    event.preventDefault();
    router.push(`/procedures/${treatmentRef.current.value}`);
  }

  return (
    <div className="text-gray-600 body-font">
      <form onSubmit={searchHandler}>
        <div className="container px-5 py-16 md:py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h2 className="md:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {h2[0][language]}
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {p_1[0][language]}
            </p>
            <p className="text-sm text-brightPrimary font-bold mt-2">
            {p_2[0][language]}
            </p>
          </div>
          <div className="flex lg:w-2/3 w-full md:flex-row flex-col mx-auto px-8 md:space-x-4 md:space-y-0 space-y-4 md:px-0 items-end">
            {/*  <div className="relative flex-grow w-full">
        <input
          type="text"
          id="full-name"
          name="full-name"
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Clinic"
        />
      </div> */}
            <div className="relative flex-grow w-full md:w-2/3">
              <select
                ref={treatmentRef}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                //onChange={treatmentChangeHandler}
              >
                {allProcedures.map((procedure) => {
                  return (
                    <option key={procedure.slug} value={procedure.slug}>
                      {procedure.title}
                    </option>
                  );
                })}
                {/* <option>Hair Transplant</option>
          <option>Nose Job (Rhinoplasty)</option>
          <option>Dental Operations</option>
          <option>Breast Surgeries</option>
          <option>Obesity Operations</option>
          <option>Eye Surgeries</option>
          <option>Other Plastic Surgeries</option> */}
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

            <button className="text-white bg-brightPrimary border-0 py-2 px-8 focus:outline-none hover:bg-darkPrimary rounded text-lg w-full md:w-auto text-center">
            {btn[0][language]}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
