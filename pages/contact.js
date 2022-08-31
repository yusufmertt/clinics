import { useRef, useState } from "react";
import Head from "next/head";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function ContactPage() {
  const nameRef = useRef();
  const emailRef = useRef();
  const topicRef = useRef();
  const messageRef = useRef();
  const phoneRef = useRef();

  const [emailError, setEmailError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const timeStamp = new Date();

  const [classes, setClasses] = useState("");

  const [phone, setPhone] = useState();

  function phoneChangeHandler(event) {
    setPhone(event);
  }

  async function submitHandler(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const topic = topicRef.current.value;
    const note = messageRef.current.value;
    //const phone = phoneRef.current.value;
    const formData = {
      type: "contact",
      name,
      email,
      topic,
      note,
      timeStamp,
      phone,
    };

    if (email.trim() === "" && phone.trim() === "") {
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
    <section className="text-gray-600 body-font relative">
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Contact us to find clinics in Turkey."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={submitHandler}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Feel free to reach us!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            {emailError && (
              <div
                className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg"
                role="alert"
              >
                <span className="font-medium">Error!</span> We need your email
                to reach you.
              </div>
            )}
            {success && (
              <div
                className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg"
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
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brightPrimary focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email{/* <span className="text-red-600"> *</span> */}
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    id="email"
                    name="email"
                    className={
                      "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brightPrimary focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " +
                      classes
                    }
                  />
                </div>
              </div>

              <div className="w-full md:w-full px-1 mb-3 md:mb-0 mt-2">
                {/*   <label
                  className="block tracking-wide text-gray-700 text-xs mb-2"
                  htmlFor="grid-state"
                >
                  Phone Number
                  <span className="text-xs font-thin">
                  </span>
                </label>
                <div className="relative">
                  <input
                    ref={phoneRef}
                    type="tel"
                    id="phone"
                    name="phone"
                    className={
                      "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brightPrimary focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " +
                      classes
                    }
                  />
                </div> */}{" "}
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone Number
                  </label>
                  <PhoneInput
                    enableSearch
                    country={"de"}
                    onChange={phoneChangeHandler}
                    inputClass="!w-full !bg-gray-100"
                    className="mt-0.5"
                  />
                </div>
              </div>
              <div className="w-full md:w-full px-1 mb-3 md:mb-0 mt-2">
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
                    {/* {locations.map((location) => {
                      return (
                        <option key={location.city}>{location.city}</option>
                      );
                    })} */}
                    <option>Feedback</option>                    
                    <option>Reservation</option>
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
              </div>
              <div className="p-2 w-full">
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
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brightPrimary focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    placeholder="You can ask anything!"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-brightPrimary border-0 py-2 px-8 focus:outline-none hover:bg-darkPrimary rounded text-lg"
                >
                  Send
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-brightPrimary">
                  findclinicsturkey@gmail.com
                </a>
                {/* <p className="leading-normal my-5">
                  49 Smith St.
                  <br />
                  Saint Cloud, MN 56301
                </p> */}
                <br />
                <span className="inline-flex my-5">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactPage;
