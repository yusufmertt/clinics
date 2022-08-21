import Image from "next/image";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

/* const items = [
  <div className="p-3" data-value="1">
    <Image src="/images/test/avicenna.png" width={650} height={300} />
    <h3 className="font-bold uppercase text-gray-800 my-1">
      Avicenna Hospital
    </h3>
    <p className="bg-blue-100 inline-block text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
      Hair Transplant
    </p>
  </div>,
  <div className="p-3" data-value="1">
    <Image src="/images/test/avicenna.png" width={650} height={300} />
    <h3 className="font-bold uppercase text-gray-800 my-1">
      Avicenna Hospital
    </h3>
    <p className="bg-blue-100 inline-block text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
      Hair Transplant
    </p>
  </div>,
  <div className="p-3" data-value="1">
    <Image src="/images/test/avicenna.png" width={650} height={300} />
    <h3 className="font-bold uppercase text-gray-800 my-1">
      Avicenna Hospital
    </h3>
    <p className="bg-blue-100 inline-block text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
      Hair Transplant
    </p>
  </div>,
  <div className="p-3" data-value="1">
    <Image src="/images/test/avicenna.png" width={650} height={300} />
    <h3 className="font-bold uppercase text-gray-800 my-1">
      Avicenna Hospital
    </h3>
    <p className="bg-blue-100 inline-block text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
      Hair Transplant
    </p>
  </div>,
  <div className="p-3" data-value="1">
    <Image src="/images/test/avicenna.png" width={650} height={300} />
    <h3 className="font-bold uppercase text-gray-800 my-1">
      Avicenna Hospital
    </h3>
    <p className="bg-blue-100 inline-block text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
      Hair Transplant
    </p>
  </div>,
];
 */
export default function FeaturedClinics(props) {
  let items = [];

  const featuredClinics = JSON.parse(props.featuredClinics);

  featuredClinics.map((clinic) => {
    items.push(
      <div className="p-3" data-value="1">
        <Image src={`/images/featured-clinics/${clinic.slug}.png`} width={650} height={300} />
        <h3 className="font-bold uppercase text-gray-800 my-1">
          {clinic.name}
        </h3>
        {clinic.features.map((feature) => {
          return <p key={feature} className="bg-blue-100 inline-block text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            {feature}
          </p>;
        })}
      </div>
    );
  });

  return (
    <section className="mt-16 px-10">
      <div className="ml-3  mb-4 ">
        <h2 className="font-extrabold text-xl text-black tracking-wider">
          FEATURED HOSPITALS
        </h2>
        <div className="h-1 w-20 my-1 bg-brightPrimary rounded"></div>
        <p className="text-sm text-gray-500">
          Get 20% discount at featured hospitals!
        </p>
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
