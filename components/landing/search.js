import Link from "next/link";

export default function Search() {
  return (
    <section className="text-gray-600 body-font">
      <form>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="md:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
             Find the perfect clinic for you
            </h1>
           <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Choose from hunderds of clinics and hospitals.
            </p>
            <p className="text-sm text-slate-600">
              15% discount with reference code!
            </p>
          </div>
          <div className="flex lg:w-2/3 w-full md:flex-row flex-col mx-auto px-8 md:space-x-4 md:space-y-0 space-y-4 md:px-0 items-end">
            <div className="relative flex-grow w-full">
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Clinic"
              />
            </div>
            <div className="relative flex-grow w-full">
              <select
                //ref={treatmentRef}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                //onChange={cityChangeHandler}
              >
                {/* {locations.map((location) => {
                      return (
                        <option key={location.city}>{location.city}</option>
                      );
                    })} */}
                <option>Hair Transplant</option>
                <option>Nose Job (Rhinoplasty)</option>
                <option>Dental Operations</option>
                <option>Breast Surgeries</option>
                <option>Obesity Operations</option>
                <option>Eye Surgeries</option>
                <option>Other Plastic Surgeries</option>
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
            <Link href="/clinics">
            <a className="text-white bg-brightPrimary border-0 py-2 px-8 focus:outline-none hover:bg-darkPrimary rounded text-lg w-full md:w-2/3">
              Search Clinics
            </a>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}
