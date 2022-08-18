import Image from "next/image";

function Info() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Pitchfork Kickstarter Taxidermy
            </h1>
            <div className="h-1 w-20 bg-green-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            You can get your operation done by the most qualified experts and
            enjoy Turkey&apos;s culture, views, foods in Istanbul, Antalya, Izmir...
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md shadow-gray-200">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/photos/hero.jpg"
                alt="content"
                width={700}
                height={400}
              />
              <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">
                EXPERTS
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Best Quality
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md shadow-gray-200">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/hair-transplant.jpg"
                alt="content"
                width={700}
                height={400}
              />
              <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">
                RELIABLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Most visited
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
                src="/images/dentist.jpg"
                alt="content"
                width={700}
                height={400}
              />
              <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Great Pyramid of Giza
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md shadow-gray-200">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/photos/hero.jpg"
                alt="content"
                width={700}
                height={400}
              />
              <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">
                FOR EVERYONE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Best Price
              </h2>
              <p className="leading-relaxed text-base">
                Get best quality for best price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
