import ImageGallery from "react-image-gallery";
import { Card, Text, Badge, Button, Group } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const ClinicDetails = (props) => {
  const [clinicObject] = props.clinic;

  const {
    name,
    description,
    longDescription,
    featuring,
    features,
    location,
    featured,
    mapsURL,
    address,
    website,
    phone,
    slug,
  } = clinicObject;
  const images = [
    {
      original: `/images/clinics/${slug}/1.png`,
      thumbnail: `/images/clinics/${slug}/1.png`,
    },
    {
      original: `/images/clinics/${slug}/2.png`,
      thumbnail: `/images/clinics/${slug}/2.png`,
    },
    {
      original: `/images/clinics/${slug}/3.png`,
      thumbnail: `/images/clinics/${slug}/3.png`,
    },
    {
      original: `/images/clinics/${slug}/4.png`,
      thumbnail: `/images/clinics/${slug}/4.png`,
    },
    {
      original: `/images/clinics/${slug}/5.png`,
      thumbnail: `/images/clinics/${slug}/5.png`,
    },
    {
      original: `/images/clinics/${slug}/6.png`,
      thumbnail: `/images/clinics/${slug}/6.png`,
    },
  ];

  return (
    <div className="md:flex-row lg:px-28 m-5 flex-col flex mt-2 justify-between xl:px-36">
       <Head>
        <title>{name}</title>
        <meta name="description" content="Contact us to reservation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:w-2/3 order-last md:order-first">
        <Link href="/clinics">
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
        <div className="shadow-sm shadow-gray-300 p-6">
          <div className="mb-5">
            <h1 className="text-3xl uppercase text-center mb-4 font-bold tracking-wide text-gray-700">
              {name}
            </h1>
            <div className="mb-3">
              {features.map((feature) => {
                return (
                  <p
                    key={feature}
                    className="bg-blue-100 inline-block text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
                  >
                    {feature}
                  </p>
                );
              })}
            </div>
            <p>{longDescription}</p>
          </div>
          <div>
            <ImageGallery
              items={images}
              showPlayButton={false}
              showFullscreenButton={false}
            />
          </div>
        </div>
        <div className="shadow-sm shadow-gray-300 bg-slate-100 mb-6 rounded-2xl p-6 mt-4 flex flex-col text-gray-800">
          <div className="flex justify-between mb-2">
            <div>
              <Image
                src="/images/icons/phone.svg"
                height={12}
                width={12}
                alt="phone"
              />
              <a href="tel:+905458676066" className="mx-2">
                {phone}
              </a>
            </div>
            <div>
              <Image
                src="/images/icons/website.svg"
                height={12}
                width={12}
                alt="website"
              />

              <a
                href={website}
                target="_blank"
                rel="noreferrer"
                className="mx-2 text-blue-900 hover:text-blue-700"
              >
                {website}
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/images/icons/location.svg"
              height={12}
              width={12}
              alt="location"
            />
            <span className="mx-2">{address}</span>
          </div>
        </div>
        {mapsURL && (
          <div>
            <iframe
              src={mapsURL}
              width="800"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        )}
      </div>
      <div className="md:w-1/4 py-4 md:mt-24 rounded-lg md:h-1/2">
        <div className="flex flex-col w-full rounded-lg bg-slate-100 shadow-lg shadow-gray-300 p-4">
          {featured && (
            <div className="md:text-end mb-5">
              <Badge color="red" variant="dark">
                Recommended!
              </Badge>
            </div>
          )}
          <div className="flex-1">
            <p className="text-xl uppercase text-center mb-2 text-slate-700 font-semibold">
              {name}
            </p>
            <div>
              {features.map((feature) => {
                return (
                  <p
                    key={feature}
                    className="bg-blue-100 inline-block text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
                  >
                    {feature}
                  </p>
                );
              })}
            </div>
            <div className="m-2 text-center">
              <Image src="/images/icons/location.svg" height={12} width={12} />
              <span className="mx-2">{location}</span>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col bg-red-600 sm:mt-10 mt-5 rounded-lg p-5 shadow-2xl shadow-gray-500">
          <p className="mb-2 text-white rounded-lg text-sm uppercase p-3 font-bold">
            Get 10% discount by making reservation with our refferal code!
          </p>
          <Link href={`/clinics/${slug}/reservation`}>
            <a className="bg-white w-full uppercase text-center text-red-600 font-semibold hover:bg-gray-300 px-3 py-1.5 transition duration-200 rounded-lg">
              Get Reservation!
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClinicDetails;
