import Content from "./../../content-files/landing/services.json";

const h2 = Content.filter((ele) => ele.name == "h2");
const transport = Content.filter((ele) => ele.name == "transport");
const accomodation = Content.filter((ele) => ele.name == "accomodation");
const support = Content.filter((ele) => ele.name == "support");
const transport_text = Content.filter((ele) => ele.name == "transport_text");
const accomodation_text = Content.filter(
  (ele) => ele.name == "accomodation_text"
);
const support_text = Content.filter((ele) => ele.name == "support_text");

export default function Services(props) {
  const language = props.language;

  return (
    <section classNameName="sm:px-16 xl:px-36 xxl:px-48 mb-5">
      <div className="container px-5 py-5 mx-auto">
        <h2 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
          {h2[0][language]}
          <br className="hidden sm:block" />
        </h2>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M4.873 3h14.254a1 1 0 0 1 .809.412l3.823 5.256a.5.5 0 0 1-.037.633L12.367 21.602a.5.5 0 0 1-.706.028c-.007-.006-3.8-4.115-11.383-12.329a.5.5 0 0 1-.037-.633l3.823-5.256A1 1 0 0 1 4.873 3zm.51 2l-2.8 3.85L12 19.05 21.417 8.85 18.617 5H5.383z" />
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                {transport[0][language]}
              </h2>
              <p className="leading-relaxed text-base">
                {transport_text[0][language]}
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
                viewBox="0 -32 576 576"
              >
                <path d="M560 64c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h15.98v384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h240v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v80h240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-16V64h16zm-304 44.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm0 96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm-128-96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zM179.2 256h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8zM192 384c0-53.02 42.98-96 96-96s96 42.98 96 96H192zm256-140.8c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-96c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4z" />
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                {accomodation[0][language]}
              </h2>
              <p className="leading-relaxed text-base">
                {accomodation_text[0][language]}
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M17.44,3.5H15.75V2.97a.949.949,0,0,0-1-.91H9.25a.949.949,0,0,0-1,.91V3.5H6.56A2.5,2.5,0,0,0,4.06,6V19.44a2.5,2.5,0,0,0,2.5,2.5H17.44a2.5,2.5,0,0,0,2.5-2.5V6A2.5,2.5,0,0,0,17.44,3.5ZM9.25,3.06l5.5.01V4.19c0,.61-.69,1.12-1.5,1.12h-2.5c-.82,0-1.5-.51-1.5-1.12Zm9.69,16.38a1.511,1.511,0,0,1-1.5,1.5H6.56a1.5,1.5,0,0,1-1.5-1.5V6a1.5,1.5,0,0,1,1.5-1.5H8.28a2.4,2.4,0,0,0,2.47,1.81h2.5A2.4,2.4,0,0,0,15.72,4.5h1.72A1.5,1.5,0,0,1,18.94,6Z" />
                <path d="M14.5,12.71a.5.5,0,0,1-.5.5H12.5v1.5a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5v-1.5H10a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h1.5v-1.5a.5.5,0,0,1,.5-.5.508.508,0,0,1,.5.5v1.5H14A.508.508,0,0,1,14.5,12.71Z" />
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                {support[0][language]}
              </h2>
              <p className="leading-relaxed text-base">
                {support_text[0][language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
