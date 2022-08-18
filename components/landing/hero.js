import Link from "next/link";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

function Hero(props) {
  const { language } = props;
  let content;

  if (language === "English") {
    content = (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <Link href="#">
              <a href="#" className="mb-6 sm:mx-auto">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-green-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </a>
            </Link>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-300 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                      width="52"
                      height="24"
                    />
                  </svg>

                  <span className="relative">Find&nbsp;</span>
                </span>
                Turkey&apos;s most qualified experts in hair transplant
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Meet with best doctors in hair transplant, dental operations,
                IVF, cosmetic operations and much more...
              </p>
            </div>
            <div>
              <Link href="/clinics">
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outline-none"
                >
                  Browse Clinics
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!language) {
    content = (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <Link href="#">
              <a href="#" className="mb-6 sm:mx-auto">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-green-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </a>
            </Link>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-300 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                      width="52"
                      height="24"
                    />
                  </svg>

                  <span className="relative">Find&nbsp;</span>
                </span>
                world&apos;s most qualified experts in hair transplant
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Meet with best doctors in hair transplant, dental operations,
                IVF, cosmetic operations and much more...
              </p>
            </div>
            <div>
              <Link href="/clinics">
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outline-none"
                >
                  Browse Clinics
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (language === "German") {
    content = (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <Link href="#">
              <a href="#" className="mb-6 sm:mx-auto">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-green-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </a>
            </Link>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-300 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                      width="52"
                      height="24"
                    />
                  </svg>

                  <span className="relative">Finden&nbsp;</span>
                </span>
                Sie die weltweit qualifiziertesten Experten für
                Haartransplantationen
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Treffen Sie sich mit den besten Ärzten für Haartransplantation,
                Zahnoperationen, IVF, Schönheitsoperationen und vieles mehr...
              </p>
            </div>
            <div>
              <Link href="/clinics">
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outline-none"
                >
                  Kliniken durchsuchen
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //return content;

  return (
    <section className="relative bg-white">
      <Image
        className="absolute inset-0 object-[50%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src="/images/hair-transplant2.jpg"
        alt="Couple on a bed with a dog"
        layout="fill"
      />

      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

      <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Turkey&apos;s most qualified experts in&nbsp;
            <strong className="font-extrabold text-green-500 sm:block">
              hair transplant
            </strong>
          </h1>

          <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            Meet with best doctors in hair transplant, dental operations, IVF,
            cosmetic operations and much more...
          </p>

          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <a
              className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-green-500 sm:w-auto active:bg-green-500 hover:bg-green-700 transition duration-200 focus:outline-none focus:ring"
              href="/get-started"
            >
              Find Clinics
            </a>

            <a
              className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-green-600 sm:w-auto hover:text-green-700 active:text-green-500 focus:outline-none focus:ring"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
