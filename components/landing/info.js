import Image from "next/image";

function Info() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 upperg">
              Best doctors in Turkey!
            </h1>
            <div className="h-1 w-20 bg-brightPrimary rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            You can get your operation done by the most qualified experts and
            enjoy Turkey&apos;s culture, views, foods in Istanbul, Antalya,
            Izmir...
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md shadow-gray-200">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/landing/rhinoplasty.jpg"
                alt="content"
                width={700}
                height={400}
              />
              <h3 className="tracking-widest text-brightPrimary text-xs font-medium title-font">
                BEST PRICE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4 uppercase">
                RHINOPLASTY
              </h2>
              <p className="leading-relaxed text-base">
                Get your rhinoplasty operation done in full-fledged hospitals by best
                doctors in Turkey.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md shadow-gray-200">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/landing/laser-eye.jpg"
                alt="content"
                width={700}
                height={400}
              />
              <h3 className="tracking-widest text-brightPrimary text-xs font-medium title-font">
              BEST SERVICE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4  uppercase">
                LASER EYE SURGERY
              </h2>
              <p className="leading-relaxed text-base">
                20% of world&apos;s hair transplants are done in Turkey.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md shadow-gray-200">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/landing/hair-transplant5.jpg"
                alt="content"
                width={700}
                height={400}
              />
              <h3 className="tracking-widest text-brightPrimary text-xs font-medium title-font">
                MOST VISITED
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4 uppercase">
                Hair Transplantation
              </h2>
              <p className="leading-relaxed text-base">
                Our doctors will provide before-after procedure medicines, routines with you.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md shadow-gray-200">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/landing/dentist2.jpg"
                alt="content"
                width={700}
                height={400}
              />
              <h3 className="tracking-widest text-brightPrimary text-xs font-medium title-font">
                BEST PRICE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4 uppercase">
                Dental Operations
              </h2>
              <p className="leading-relaxed text-base">
                Get best quality for best price in dental operations like implants and jaw surgeries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
