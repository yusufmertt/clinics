import Image from "next/image";
import React from "react";
import Link from "next/link";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
  1400: { items: 4 },
};

export default function PopularProcedures(props) {
  let items = [];

  //const featuredClinics = JSON.parse(props.featuredClinics);
  const popularProcedures = props.popularProcedures;

  popularProcedures.map((procedure) => {
    items.push(
      <div className="p-3" data-value="1">
        <Image src={procedure.image} width={650} height={300} />
        <h3 className="font-bold text-lg uppercase text-gray-800 my-1">
          {procedure.title}
        </h3>
        {/* {procedure.features.map((feature) => {
            return (
              <p
                key={feature}
                className="bg-yellow-100 inline-block text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
              >
                {feature}
              </p>
            );
          })} */}
        <p className="text-md">Average Price</p>
        <p className="text-lg tracking-wider font-medium">{procedure.averagePrice}</p>
        <Link href={`/procedures/${procedure.slug}`}>
          <a
            href="#"
            className="inline-flex items-center mt-2 py-2 px-3 text-sm font-medium text-center text-white bg-brightPrimary rounded-lg hover:bg-darkPrimary focus:ring-4 focus:outline-none focus:ring-purple-300"
          >
            View Clinics
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </Link>
      </div>
    );
  });

  return (
    <section className="mt-16 px-4 sm:px-8">
      <div className="ml-3  mb-4 ">
        <h2 className="font-extrabold text-xl text-black tracking-wider">
          POPULAR PROCEDURES
        </h2>
        <div className="h-1 w-20 my-1 bg-brightPrimary rounded"></div>
        {/*  <p className="text-sm text-gray-500">
            Get 20% discount at featured hospitals!
          </p> */}
      </div>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </section>
  );
}
