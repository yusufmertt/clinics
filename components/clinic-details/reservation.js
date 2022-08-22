import { useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";

function Reservation(props) {
  const parsedClinic = JSON.parse(props.clinic);
  const clinicEmail = parsedClinic[0].email;
  const slug = parsedClinic[0].slug;
  const clinic = parsedClinic[0].name;

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const phoneRef = useRef();

  const timeStamp = new Date();

  const [emailError, setEmailError] = useState(false);
  const [success, setSuccess] = useState(false);

  function submitHandler(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    const phone = phoneRef.current.value;
    const formData = {
      name,
      email,
      message,
      phone,
      clinicEmail,
      timeStamp,
      clinic,
    };

    /*     if (email.trim() === "") {
      setEmailError(true);
      //setClasses("border-red-500")
    } else { */
    fetch("/api/reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        fetch("/api/reservation-feedback", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        setEmailError(false);
        setSuccess(true);
      }
    });
  }
  return (
    <section className="text-gray-600 body-font relative">
      <Head>
        <title>Reservation</title>
        <meta name="description" content="Contact us to reservation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={submitHandler}>
        <div className="container px-5 py-24 mx-auto">
          <Link href={`/clinics/${slug}`}>
            <div className="flex p-3 text-brightPrimary hover:cursor-pointer hover:text-darkPrimary transition duration-200">
              <svg viewBox="0 0 50 50" fill="currentColor" className="h-7">
                <path
                  d="M45.506,33.532c-1.741-7.42-7.161-17.758-23.554-19.942V7.047c0-1.364-0.826-2.593-2.087-3.113
		c-1.261-0.521-2.712-0.229-3.675,0.737L1.305,19.63c-1.739,1.748-1.74,4.572-0.001,6.32L16.19,40.909
		c0.961,0.966,2.415,1.258,3.676,0.737c1.261-0.521,2.087-1.75,2.087-3.113v-6.331c5.593,0.007,13.656,0.743,19.392,4.313
		c0.953,0.594,2.168,0.555,3.08-0.101C45.335,35.762,45.763,34.624,45.506,33.532z"
                />
              </svg>
              Go back
            </div>
          </Link>
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Make your reservation!
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Make your reservation from this page and get 10% discount!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            {emailError && (
              <div
                className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg "
                role="alert"
              >
                <span className="font-medium">Error!</span> We need your email
                to reach you.
              </div>
            )}
            {success && (
              <div
                className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg "
                role="alert"
              >
                <span className="font-medium">Success!</span> We have received
                your email, we will get back to you as soon as possile.
              </div>
            )}
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
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
              <div className="p-2 w-1/2">
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
                      "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brightPrimary focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                    }
                  />
                </div>
              </div>

              <div className="w-full md:w-full px-1 mb-3 md:mb-0 mt-2">
                <label
                  className="block tracking-wide text-gray-700 text-xs mb-2"
                  htmlFor="grid-state"
                >
                  Phone Number{" "}
                  <span className="text-xs font-thin">
                    (With country/area code)
                  </span>
                </label>
                <div className="relative">
                  <input
                    ref={phoneRef}
                    type="phone"
                    id="email"
                    name="email"
                    className={
                      "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brightPrimary focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                    }
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
                  <input
                    type="text"
                    id="disabled-input-2"
                    aria-label="disabled input 2"
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5 cursor-not-allowed"
                    value="Reservation"
                    disabled
                    readOnly
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Notes/Questions for the doctor
                  </label>
                  <textarea
                    ref={messageRef}
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brightPrimary focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
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
              {/*    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-green-500">example@email.com</a>
                <p className="leading-normal my-5">
                  49 Smith St.
                  <br />
                  Saint Cloud, MN 56301
                </p>
                <span className="inline-flex">
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
              </div> */}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Reservation;
