import Link from "next/link";
import { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Content from "./../../content-files/landing/cta";

const h2 = Content.filter((ele) => ele.name == "h2");
const text = Content.filter((ele) => ele.name == "text");
const name = Content.filter((ele) => ele.name == "name");
const procedure = Content.filter((ele) => ele.name == "procedure");
const email = Content.filter((ele) => ele.name == "email");
const phoneNum = Content.filter((ele) => ele.name == "phone");
const note = Content.filter((ele) => ele.name == "note");
const clinic = Content.filter((ele) => ele.name == "clinic");
const send = Content.filter((ele) => ele.name == "send");

function Cta(props) {
  const {
    language,
    allFeatures,
    allProcedures,
    showPreferredClinics = false,
  } = props;

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const treatmentRef = useRef();
  const noteRef = useRef();
  const preferredClinicRef = useRef();

  const [emailError, setEmailError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const timeStamp = new Date();

  const [phone, setPhone] = useState("");

  function phoneChangeHandler(event) {
    setPhone(event);
  }

  async function submitHandler(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    //const phone = phoneRef.current.value;
    const treatment = treatmentRef.current.value;
    const note = noteRef.current.value;

    let preferredClinic;
    if (props.clinic) {
      preferredClinic = props.clinic;
    } else {
      preferredClinic = preferredClinicRef.current.value;
    }

    const clinic = props.clinic;

    const formData = {
      type: "consultation",
      name,
      email,
      timeStamp,
      phone,
      treatment,
      note,
      clinic,
      preferredClinic,
      language,
    };

    if (email.trim() === "" && phone.length < 5) {
      setEmailError(true);
      setSuccess(false);
      //setClasses("border-red-500")
    } else {
      setIsLoading(true);
      fetch("/api/contact/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).then((response) => {
        if (response.ok) {
          fetch("/api/contact/feedback-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
          setEmailError(false);
          setSuccess(true);
          setIsLoading(false);
        }
      });
    }
  }

  return (
    <section className="text-gray-600 body-font">
      {/*  <form onSubmit={submitHandler}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Need help?
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We can help you decide your clinic, making reservations, planning
              your visit. You can contact us through
              <a
                target="_blank"
                href="https://wa.me/905458676066"
                rel="noreferrer"
                className="text-green-500 hover:text-green-700 transition duration-200"
              >
                &nbsp;WhatsApp
              </a>
              , live support and
              <Link href="/contact">
                <a className="text-green-500 hover:text-green-700 transition duration-200">
                  &nbsp;contact page
                </a>
              </Link>
              . Or just leave your contact information and we will get back to
              you as soon as possible.
            </p>
          </div>
          {emailError && (
            <div
              className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              role="alert"
            >
              <span className="font-medium">Error!</span> We need your email to
              reach you.
            </div>
          )}
          {success && (
            <div
              className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
              role="alert"
            >
              <span className="font-medium">Success!</span> We have received your
              email, we will get back to you as soon as possile.
            </div>
          )}
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                ref={nameRef}
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button
              type="submit"
              className="text-white bg-green-400  transition duration-200 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"
            >
              Send
            </button>
          </div>
        </div>
      </form> */}
      <form onSubmit={submitHandler}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {/* Get free consultation! */}
              {h2[0][language]}
            </h2>

            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {/* We and our doctors will help you decide your clinic, treatment
              options, making reservations, planning your visit, pricing and
              much more! */}
              {text[0][language]}

              {/*  You can contact us through
              <a
                target="_blank"
                href="https://wa.me/905458676066"
                rel="noreferrer"
                className="text-green-500 hover:text-green-700 transition duration-200"
              >
                &nbsp;WhatsApp
              </a>
              , live support and
              <Link href="/contact">
                <a className="text-green-500 hover:text-green-700 transition duration-200">
                  &nbsp;contact page
                </a>
              </Link>
              . Or just leave your contact information and we will get back to
              you as soon as possible. */}
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            {emailError && (
              <div
                className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                role="alert"
              >
                <span className="font-medium">Error!</span> We need your email
                or phone number to reach you.
              </div>
            )}
            {success && (
              <div
                className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                role="alert"
              >
                <span className="font-medium">Success!</span> We have received
                your email, we will get back to you as soon as possile.
              </div>
            )}
            {isLoading && (
              <div
                className="p-4 mb-4 text-sm text-yellow-500 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
                role="alert"
              >
                <span className="font-medium">Loading...</span> Submitting your
                request, please wait...
              </div>
            )}
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    {name[0][language]}
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brightPrimary focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>{" "}
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <label> {procedure[0][language]}</label>
                  <select
                    ref={treatmentRef}
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    //onChange={changeHandler}
                  >
                    {/* <option>Hair Transplant</option>
                    <option>Nose Job (Rhinoplasty)</option>
                    <option>Dental Operations</option>
                    <option>Breast Surgeries</option>
                    <option>Obesity Operations</option>
                    <option>Eye Surgeries</option>
                    <option>Other Plastic Surgeries</option>
                    <option>Other (specify in notes)</option> */}
                    {allProcedures &&
                      allProcedures.map((procedure) => {
                        return (
                          <option key={procedure.slug} value={procedure.slug}>
                            {procedure.title}
                          </option>
                        );
                      })}
                    {allFeatures &&
                      allFeatures.map((feature) => {
                        return (
                          <option key={feature} value={feature}>
                            {feature}
                          </option>
                        );
                      })}
                    <option>Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 mt-6 right-0 flex items-center px-2 text-gray-700">
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
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    {email[0][language]}
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    id="email"
                    name="email"
                    className={
                      "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brightPrimary focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                    }
                  />
                </div>
              </div>
              <div className="p-2 w-full md:w-1/2 ">
                {/* <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-600"
                >
                  Phone Number
               
                </label>
                <div className="relative">
                  <input
                    ref={phoneRef}
                    type="tel"
                    id="phone"
                    name="phone"
                    className={
                      "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brightPrimary focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                    }
                  />
                </div> */}
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="leading-7 text-sm text-gray-600"
                  >
                    {phoneNum[0][language]}
                  </label>
                  <PhoneInput
                    country={"de"}
                    enableSearch
                    onChange={phoneChangeHandler}
                    inputClass="!w-full !bg-gray-100"
                    className="mt-0.5"
                  />
                </div>
              </div>
              {showPreferredClinics && (
                <div className="p-2 w-full md:w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      {clinic[0][language]}
                    </label>
                    <input
                      ref={preferredClinicRef}
                      type="text"
                      id="preferred-clinic"
                      name="preferred-clinic"
                      className={
                        "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brightPrimary focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                      }
                    />
                  </div>
                </div>
              )}
              <div className="p-2 w-full md:w-full">
                <div className="relative">
                  <label
                    htmlFor="note"
                    className="leading-7 text-sm text-gray-600"
                  >
                    {note[0][language]}
                  </label>
                  <textarea
                    ref={noteRef}
                    type="text"
                    id="note"
                    name="note"
                    placeholder=""
                    className={
                      "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brightPrimary focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                    }
                  />
                </div>
              </div>
              {/*    <div className="w-full md:w-full px-1 mb-3 md:mb-0 mt-2">
                <label
                  className="block tracking-wide text-gray-700 text-xs mb-2"
                  htmlFor="grid-state"
                >
                  Topic
                </label>
                <div className="relative">
                  <select
                    ref={topicRef}
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    //onChange={cityChangeHandler}
                  >
                    <option>Reservation</option>
                    <option>Feedback</option>
                    <option>Other</option>
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
              </div> */}
              {/*  <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    ref={messageRef}
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div> */}
              <div className="p-2 mt-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-brightPrimary border-0 py-2 px-8 focus:outline-none hover:bg-darkPrimary rounded text-lg"
                >
                  {send[0][language]}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
export default Cta;
