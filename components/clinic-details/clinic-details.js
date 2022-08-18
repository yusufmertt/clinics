import ImageGallery from "react-image-gallery";
import { Card, Text, Badge, Button, Group } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
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
  } = clinicObject;

  return (
    <div className="md:flex-row lg:px-28 m-5 flex-col flex mt-2 justify-between xl:px-36">
      <div className="md:w-2/3 order-last md:order-first">
        <Link href="/clinics">
          <div className="flex p-3 text-green-500 hover:cursor-pointer hover:text-green-700 transition duration-200">
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
        <div className="shadow-sm shadow-gray-300 bg-green-400 mb-6 rounded-2xl p-6 md:mt-0 flex flex-col ">
          <div className="flex justify-between mb-2">
            <div>
              <Image src="/images/phone.svg" height={12} width={12} alt="phone"/>
              <span className="mx-2">+90 545 867 6066</span>
            </div>
            <div>
              <Image src="/images/website.svg" height={12} width={12} alt="website"/>

              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
                className="mx-2 text-blue-900 hover:text-blue-700"
              >
                www.google.com
              </a>
            </div>
          </div>
          <div>
            <Image src="/images/location.svg" height={12} width={12} alt="location" />
            <span className="mx-2">
              Esenevler Mah. Devran Sok. No:5/3 Ümraniye İstanbul
            </span>
          </div>
        </div>
        {mapsURL && (
          <div>
            <iframe
              src={mapsURL}
              width="550"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        )}
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
            <ImageGallery items={images} showPlayButton={false} />
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Discover Our Team
              </p>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>
            <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
              <div>
                <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                  <Image
                    className="absolute object-cover w-full h-full rounded"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col sm:text-center">
                  <p className="text-lg font-bold">Oliver Aguilerra</p>
                  {/*    <p className="mb-5 text-xs text-gray-800">Product Manager</p>
                <div className="flex items-center space-x-3 sm:justify-center">
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div> */}
                </div>
              </div>
              <div>
                <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                  <Image
                    className="absolute object-cover w-full h-full rounded"
                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col sm:text-center">
                  <p className="text-lg font-bold">Marta Clermont</p>
                  <p className="mb-5 text-xs text-gray-800">Design Team Lead</p>
                  {/*           <div className="flex items-center space-x-3 sm:justify-center">
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div> */}
                </div>
              </div>
              <div>
                <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                  <Image
                    className="absolute object-cover w-full h-full rounded"
                    src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col sm:text-center">
                  <p className="text-lg font-bold">Alice Melbourne</p>
                  <p className="mb-5 text-xs text-gray-800">Human Resources</p>
                  {/*   <div className="flex items-center space-x-3 sm:justify-center">
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div> */}
                </div>
              </div>
              <div>
                <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                  <Image
                    className="absolute object-cover w-full h-full rounded"
                    src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col sm:text-center">
                  <p className="text-lg font-bold">John Doe</p>
                  <p className="mb-5 text-xs text-gray-800">Good guy</p>
                  {/*   <div className="flex items-center space-x-3 sm:justify-center">
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:w-1/4 py-4 md:mt-24 px-5 rounded-lg md:h-1/2 bg-green-400 shadow-sm shadow-gray-300">
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
          {/*      <div className="my-4">
          <p>{description}</p>
        </div> */}
          <div className="m-2 text-center">
            <Image src="/images/location.svg" height={12} width={12} />
            <span className="mx-2">Istanbul/Kadiköy</span>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="mb-2 text-red-600 rounded-lg text-sm uppercase p-3 font-bold">
            Get 10% discount by making reservation with us!
          </p>
          <Link href="/contact">
            <a className="bg-green-500 w-full uppercase text-center text-white hover:bg-green-600 px-3 py-1.5 transition duration-200 rounded-lg">
              Get Reservation!
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClinicDetails;
