import Link from "next/link";
import Image from "next/image";

function Hero(props) {
  const { language } = props;
  let content;

  if (!language || language === "English") {
    content = (
      <section className="relative bg-white">
        <Image
          className="absolute inset-0 object-[50%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
          src="/images/hair-transplant2.jpg"
          alt="Couple on a bed with a dog"
          layout="fill"
        />

        <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

        <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Turkey&apos;s most qualified experts in&nbsp;
              <strong className="font-extrabold text-green-500 sm:block">
                hair transplant
              </strong>
            </h1>

            <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
              Meet with best doctors in hair transplant, dental operations, IVF,
              cosmetic operations and much more...
            </p>

            <div className="flex flex-wrap gap-4 mt-8 text-center">
              <Link href="/clinics">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-green-500 sm:w-auto active:bg-green-500 hover:bg-green-700 transition duration-200 focus:outline-none focus:ring"
                  href="#"
                >
                  Find Clinics
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-green-600 sm:w-auto hover:text-green-700 active:text-green-500 focus:outline-none focus:ring"
                  href="#"
                >
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (language === "German") {
    content = (
      <section className="relative bg-white">
        <Image
          className="absolute inset-0 object-[50%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
          src="/images/hair-transplant2.jpg"
          alt="Couple on a bed with a dog"
          layout="fill"
        />

        <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

        <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Die qualifiziertesten Experten der Türkei für
              <strong className="font-extrabold text-green-500 sm:block">
                Haartransplantationen
              </strong>
            </h1>

            <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
              Treffen Sie sich mit den besten Ärzten für Haartransplantation,
              Zahnoperationen, IVF, kosmetische Operationen und vieles mehr ...
            </p>

            <div className="flex flex-wrap gap-4 mt-8 text-center">
              <Link href="/clinics">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-green-500 sm:w-auto active:bg-green-500 hover:bg-green-700 transition duration-200 focus:outline-none focus:ring"
                  href="#"
                >
                  Kliniken finden
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-green-600 sm:w-auto hover:text-green-700 active:text-green-500 focus:outline-none focus:ring"
                  href="#"
                >
                  Lern mehr
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return content;
}

export default Hero;
