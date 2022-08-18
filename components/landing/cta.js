import Link from "next/link";
import { useRef, useState } from "react";

function Cta() {
  const nameRef = useRef();
  const emailRef = useRef();

  const [emailError, setEmailError] = useState(false);
  const [success, setSuccess] = useState(false);

  async function submitHandler(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const formData = { name, email };

    if (email.trim() === "") {
      setEmailError(true);
      //setClasses("border-red-500")
    } else {
      fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).then((response) => {
        if (response.ok) {
          fetch("/api/feedback-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
          setEmailError(false)
          setSuccess(true);
        }
      });
    }
  }
  return (
    <section className="text-gray-600 body-font">
      <form onSubmit={submitHandler}>
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
                Email<span className="text-red-600"> *</span>
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
      </form>
    </section>
  );
}
export default Cta;
