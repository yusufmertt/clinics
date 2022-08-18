/* import Link from "next/link";

const ClinicItem = (props) => {
  //props we need --> slug, name, short text, location, tags(array), rating
  return (
    <div className="my-4 mx-6 p-4">
      <div
        href="#"
        className="flex flex-col items-center bg-white rounded-lg border shadow-sm md:flex-row md:items-stretch hover:bg-gray-100 justify-between"
      >
        <Link href="/">
          <a>
            <div className="flex flex-col justify-between p-5 leading-normal md:w-2/3">
              <div className="h-1/2">
                <h5 className="text-2xl mb-2 font-bold tracking-tight text-gray-900 ">
                  Demo Clinic
                </h5>
                <p className="font-normal text-gray-700 ">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
              <div className="flex justify-between h-1/2">
                <span className="text-sm w-3/4 text-gray-400">
                  <span className="bg-red-400 mb-3 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-lg mr-2">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      {...props}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.8198 6.19526C20.0601 6.45561 20.0601 6.87772 19.8198 7.13807L9.9736 17.8047C9.73328 18.0651 9.34364 18.0651 9.10332 17.8047L4.18024 12.4714C3.93992 12.2111 3.93992 11.7889 4.18024 11.5286C4.42056 11.2682 4.8102 11.2682 5.05053 11.5286L9.53846 16.3905L18.9495 6.19526C19.1898 5.93491 19.5794 5.93491 19.8198 6.19526Z"
                        fill="#030D45"
                      />
                    </svg>
                    Hair transplant
                  </span>
                  <span className="bg-purple-400 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-lg mr-2">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      {...props}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.8198 6.19526C20.0601 6.45561 20.0601 6.87772 19.8198 7.13807L9.9736 17.8047C9.73328 18.0651 9.34364 18.0651 9.10332 17.8047L4.18024 12.4714C3.93992 12.2111 3.93992 11.7889 4.18024 11.5286C4.42056 11.2682 4.8102 11.2682 5.05053 11.5286L9.53846 16.3905L18.9495 6.19526C19.1898 5.93491 19.5794 5.93491 19.8198 6.19526Z"
                        fill="#030D45"
                      />
                    </svg>
                    IVF
                  </span>
                  <span className="bg-blue-400 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-lg mr-2">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      {...props}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.8198 6.19526C20.0601 6.45561 20.0601 6.87772 19.8198 7.13807L9.9736 17.8047C9.73328 18.0651 9.34364 18.0651 9.10332 17.8047L4.18024 12.4714C3.93992 12.2111 3.93992 11.7889 4.18024 11.5286C4.42056 11.2682 4.8102 11.2682 5.05053 11.5286L9.53846 16.3905L18.9495 6.19526C19.1898 5.93491 19.5794 5.93491 19.8198 6.19526Z"
                        fill="#030D45"
                      />
                    </svg>
                    Cosmetic estetics
                  </span>
                  <span className="bg-orange-400 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-lg mr-2">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      {...props}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.8198 6.19526C20.0601 6.45561 20.0601 6.87772 19.8198 7.13807L9.9736 17.8047C9.73328 18.0651 9.34364 18.0651 9.10332 17.8047L4.18024 12.4714C3.93992 12.2111 3.93992 11.7889 4.18024 11.5286C4.42056 11.2682 4.8102 11.2682 5.05053 11.5286L9.53846 16.3905L18.9495 6.19526C19.1898 5.93491 19.5794 5.93491 19.8198 6.19526Z"
                        fill="#030D45"
                      />
                    </svg>
                    Non-cosmatic estetics
                  </span>{" "}
                  <span className="bg-yellow-400 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-lg mr-2">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      {...props}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.8198 6.19526C20.0601 6.45561 20.0601 6.87772 19.8198 7.13807L9.9736 17.8047C9.73328 18.0651 9.34364 18.0651 9.10332 17.8047L4.18024 12.4714C3.93992 12.2111 3.93992 11.7889 4.18024 11.5286C4.42056 11.2682 4.8102 11.2682 5.05053 11.5286L9.53846 16.3905L18.9495 6.19526C19.1898 5.93491 19.5794 5.93491 19.8198 6.19526Z"
                        fill="#030D45"
                      />
                    </svg>
                    Fat Removal
                  </span>
                </span>
                <span className="text-sm w-1/4 text-gray-400 flex flex-col justify-around">
                  <span>rating (with stars)</span>
                  <span className="">
                    {" "}
                    <svg
                      className="h-5 inline-block"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 264.018 264.018"
                      style={{
                        enableBackground: "new 0 0 264.018 264.018",
                      }}
                      xmlSpace="preserve"
                      {...props}
                    >
                      <g>
                        <path d="M132.009,0c-42.66,0-77.366,34.706-77.366,77.366c0,11.634,2.52,22.815,7.488,33.24c0.1,0.223,0.205,0.442,0.317,0.661 l58.454,113.179c2.146,4.154,6.431,6.764,11.106,6.764c4.676,0,8.961-2.609,11.106-6.764l58.438-113.148 c0.101-0.195,0.195-0.392,0.285-0.591c5.001-10.455,7.536-21.67,7.536-33.341C209.375,34.706,174.669,0,132.009,0z  M132.009,117.861c-22.329,0-40.495-18.166-40.495-40.495c0-22.328,18.166-40.494,40.495-40.494s40.495,18.166,40.495,40.494 C172.504,99.695,154.338,117.861,132.009,117.861z" />
                        <path d="M161.81,249.018h-59.602c-4.143,0-7.5,3.357-7.5,7.5c0,4.143,3.357,7.5,7.5,7.5h59.602c4.143,0,7.5-3.357,7.5-7.5 C169.31,252.375,165.952,249.018,161.81,249.018z" />
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>
                    Bahçelievler/İstanbul
                  </span>
                </span>
              </div>
            </div>{" "}
          </a>
        </Link>
        <div className="flex flex-col p-3 md:w-1/3">
          <div
            id="default-carousel"
            className="relative"
            data-carousel="static"
          >
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
                  First Slide
                </span>
                <img
                  src="https://thumbs.dreamstime.com/b/empty-modern-hospital-corridor-clinic-hallway-interior-background-white-chairs-patients-waiting-doctor-visit-contemporary-208439059.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="https://thumbs.dreamstime.com/b/empty-modern-hospital-corridor-clinic-hallway-interior-background-white-chairs-patients-waiting-doctor-visit-contemporary-208439059.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="https://thumbs.dreamstime.com/b/empty-modern-hospital-corridor-clinic-hallway-interior-background-white-chairs-patients-waiting-doctor-visit-contemporary-208439059.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>

            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
            </div>

            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
          <div className="h-1/3 flex justify-center items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 w-full px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-700 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
              title="Sign up"
            >
              Go to details
            </a>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default ClinicItem;
 */