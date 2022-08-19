import { useRouter } from "next/router";

function PricingPage() {
  const router = useRouter();

  const content = (
    <div className="bg-white">
      <div className="container px-6 py-8 mx-auto">
        <div className="xl:items-center xl:-mx-8 xl:flex">
          <div className="flex flex-col items-center xl:items-start xl:mx-8">
            <h1 className="text-3xl font-medium text-gray-800 capitalize lg:text-4xl ">
              Our Pricing Plan
            </h1>

            <div className="mt-4">
              <span className="inline-block w-40 h-1 bg-green-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-green-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-green-500 rounded-full"></span>
            </div>

            <p className="mt-4 font-medium text-gray-500 ">
              You can get VIP features by selecting your plan!
            </p>

            <a
              href="#"
              className="flex items-center mt-4 -mx-1 text-sm text-gray-700 capitalize hover:underline hover:text-green-600 "
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div className="flex-1 xl:mx-8">
            <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
              <div className="max-w-sm mx-auto border rounded-lg md:mx-4 ">
                <div className="p-6">
                  <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-3xl ">
                    Free
                  </h1>

                  <p className="mt-4 text-gray-500">
                    You can use website&apos;s all features including searching,
                    reservation, contact through WhatsApp, email for free!
                  </p>

                  <h2 className="mt-4 text-2xl font-medium text-gray-700 sm:text-4xl ">
                    $0.00{" "}
                    {/* <span className="text-base font-medium">/Month</span> */}
                  </h2>

                  <p className="mt-1 text-gray-500">
                    No payment / Free forever
                  </p>

                  <button
                    onClick={() => {
                      router.replace("/clinics");
                    }}
                    className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500 focus:ring focus:ring-green-300 focus:ring-opacity-80"
                  >
                    Start Now
                  </button>
                </div>

                <hr className="border-gray-200 " />

                <div className="p-6">
                  <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl ">
                    What’s included:
                  </h1>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-700 ">
                        Browse all clinics
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-700 ">Reservation</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-700 ">Chat support</span>
                    </div>

                    {/*  <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 ">
                    Optimize hashtags
                  </span>
                </div> */}

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-700 ">VIP Transport</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-700 ">
                        Face-to-face support
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-sm mx-auto border rounded-lg md:mx-4 ">
                <div className="p-6">
                  <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-3xl ">
                    Premium
                  </h1>

                  <p className="mt-4 text-gray-500 ">
                    We will provide one-to-one support in Istanbul by helping
                    with transportation, reservation and much more
                  </p>

                  <h2 className="mt-4 text-2xl font-medium text-gray-700 sm:text-4xl ">
                    $200.00{" "}
                    {/* <span className="text-base font-medium">/life time</span> */}
                  </h2>

                  <p className="mt-1 text-gray-500 ">One time payment</p>

                  <button
                    onClick={() => {
                      router.replace("/contact");
                    }}
                    className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500 focus:ring focus:ring-green-300 focus:ring-opacity-80"
                  >
                    Start Now
                  </button>
                </div>

                <hr className="border-gray-200 " />

                <div className="p-6">
                  <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl ">
                    What’s included:
                  </h1>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-700 ">
                        Browse all clinics
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-700 ">Reservation</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-700 ">Chat support</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-700 ">VIP Transport</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-700 ">
                        Face-to-face support
                      </span>
                    </div>

                    {/*  <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 ">
                    Unlimited users
                  </span>
                </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <p>404</p>;
}

export default PricingPage;
