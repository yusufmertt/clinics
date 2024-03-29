import { useState, useContext } from "react";
import Link from "next/link";
import { LanguagePicker } from "./language-pick";
import Image from "next/image";
import SvgComponent from "./logosvg";
import Content from "./../../content-files/layout/navbar.json";

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = props;

  const btn1 = Content.filter((ele) => ele.name == "btn1");
  const btn2 = Content.filter((ele) => ele.name == "btn2");
  const btn3 = Content.filter((ele) => ele.name == "btn3");
  const btn4 = Content.filter((ele) => ele.name == "btn4");

  return (
    <nav className="px-4 py-5 sm:max-w-xl md:max-w-full md:px-24 lg:px-8 bg-bgWhite">
      <div className="relative flex items-center justify-between">
        <Link href="/" className="mt-6">
          <a
            href="#"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center text-brightPrimary mt-2"
          >
            {/* <Image src="/assa.png" width={40} height={40} /> */}
            <Image src="/logo/full.png" width={280} height={31} />
            {/*             <SvgComponent />
             */}
            {/* <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg> */}
            {/*  <span className="text-xl font-bold tracking-wide uppercase ">
              FindClinicsTurkey
            </span> */}
            {/* 
            <Image src="/assa.png" width={280} height={40}/> */}
          </a>
        </Link>
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <Link href="/clinics">
              <a
                href="#"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-white bg-brightPrimary px-4 py-2 rounded-xl transition-colors duration-200 hover:bg-darkPrimary"
              >
                {/* {(!language || language === "English") && "All Clinics"}
                {language === "German" && "Kliniken"}
                {language === "Arabic" && "عيادات"}
                {language === "Italian" && "Cliniche"}
                {language === "Spanish" && "Clínicas"}
                {language === "Hebrew" && "מרפאות"}
                {language === "Russian" && "Клиники"} */}
                {btn1[0][language]}
              </a>
            </Link>
          </li>

          <li>
            <Link href="/procedures">
              <a
                href="#"
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-gray-700 hover:text-brightPrimary transition duration-200"
              >
                {/*                 {(!language || language === "English") && "Procedures"}
                {language === "German" && "Bloggen"}
                {language === "Arabic" && "مقالات"}
                {language === "Italian" && "Blog"}
                {language === "Spanish" && "Blog"}
                {language === "Hebrew" && "בלוג"}
                {language === "Russian" && "блог"} */}
                {btn2[0][language]}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                href="#"
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-gray-700 hover:text-brightPrimary transition duration-200"
              >
                {/*                 {(!language || language === "English") && "Contact"}
                {language === "German" && "Kontakt"}
                {language === "Arabic" && "اتصل"}
                {language === "Italian" && "Contatto"}
                {language === "Spanish" && "Contacto"}
                {language === "Hebrew" && "איש קשר"}
                {language === "Russian" && "Контакт"} */}
                {btn3[0][language]}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <a
                href="#"
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-gray-700 hover:text-brightPrimary transition duration-200"
              >
                {/*                 {(!language || language === "English") && "About Us"}
                {language === "German" && "Kontakt"}
                {language === "Arabic" && "اتصل"}
                {language === "Italian" && "Contatto"}
                {language === "Spanish" && "Contacto"}
                {language === "Hebrew" && "איש קשר"}
                {language === "Russian" && "Контакт"} */}
                {btn4[0][language]}
              </a>
            </Link>
          </li>
          <li>
            <LanguagePicker />
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute z-10 top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link href="/">
                      <a
                        onClick={() => setIsMenuOpen(false)}
                        href="#"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center text-brightPrimary"
                      >
                        <Image src="/logo2c.png" width={300} height={35} />
                        {/*                         <Image src="/assa.png" width={40} height={40} />
                         */}
                        {/* <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg> */}
                        {/* <span className="ml-2 text-lg font-bold tracking-wide uppercase ">
                          FindClinicsTurkey
                        </span> */}
                        {/* 
            <Image src="/assa.png" width={280} height={40}/> */}
                      </a>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/clinics">
                        <a
                          onClick={() => setIsMenuOpen(false)}
                          href="#"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 hover:text-brightPrimary transition duration-200"
                        >
                          {/*                        {(!language || language === "English") &&
                            "All Clinics"}
                          {language === "German" && "Kliniken"}
                          {language === "Arabic" && "عيادات"}
                          {language === "Italian" && "Cliniche"}
                          {language === "Spanish" && "Clínicas"}
                          {language === "Hebrew" && "מרפאות"}
                          {language === "Russian" && "Клиники"} */}{" "}
                          {btn1[0][language]}
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/procedures">
                        <a
                          onClick={() => setIsMenuOpen(false)}
                          href="#"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 hover:text-brightPrimary transition duration-200"
                        >
                          {/*                          {(!language || language === "English") &&
                            "Procedures"}
                          {language === "German" && "Bloggen"}
                          {language === "Arabic" && "مقالات"}
                          {language === "Italian" && "Blog"}
                          {language === "Spanish" && "Blog"}
                          {language === "Hebrew" && "בלוג"}
                          {language === "Russian" && "блог"} */}{" "}
                          {btn2[0][language]}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a
                          onClick={() => setIsMenuOpen(false)}
                          href="#"
                          aria-label="Contact"
                          title="Contact Us"
                          className="font-medium tracking-wide text-gray-700 hover:text-brightPrimary transition duration-200"
                        >
                          {/*                {(!language || language === "English") && "Contact"}
                          {language === "German" && "Kontakt"}
                          {language === "Arabic" && "اتصل"}
                          {language === "Italian" && "Contatto"}
                          {language === "Spanish" && "Contacto"}
                          {language === "Hebrew" && "איש קשר"}
                          {language === "Russian" && "Контакт"} */}{" "}
                          {btn3[0][language]}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us">
                        <a
                          onClick={() => setIsMenuOpen(false)}
                          href="#"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 hover:text-brightPrimary transition duration-200"
                        >
                          {/*                        {(!language || language === "English") && "About Us"}
                          {language === "German" && "Kontakt"}
                          {language === "Arabic" && "اتصل"}
                          {language === "Italian" && "Contatto"}
                          {language === "Spanish" && "Contacto"}
                          {language === "Hebrew" && "איש קשר"}
                          {language === "Russian" && "Контакт"} */}
                          {btn4[0][language]}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <LanguagePicker />
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
