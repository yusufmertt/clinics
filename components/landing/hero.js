import Link from "next/link";
import Image from "next/image";

function Hero(props) {
  const { language } = props;
  let content;

  if (!language || language === "English") {
    content = (
      <section className="relative bg-white">
        <Image
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-50 sm:opacity-100"
          src="/images/landing/hair-transplant4.jpg"
          alt="Couple on a bed with a dog"
          layout="fill"
        />

        <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

        <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Turkey&apos;s most qualified doctors in&nbsp;
              <strong className="font-extrabold text-green-500 sm:block">
                hair transplant
              </strong>
            </h1>

            <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
              Meet with best doctors in hair transplant, dental operations, IVF,
              aesthetic operations and much more...
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
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-50 sm:opacity-100"
          src="/images/landing/hair-transplant4.jpg"
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
  if (language === "Arabic") {
    content = (
      <section className="relative bg-white">
        <Image
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-50 sm:opacity-100"
          src="/images/landing/hair-transplant4.jpg"
          alt="Couple on a bed with a dog"
          layout="fill"
        />

        <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

        <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              أمهر أطباء تركيا في زراعة الشعر
            </h1>

            <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
              تعرف على أفضل الأطباء في زراعة الشعر وعمليات الأسنان والعمليات
              التجميلية وغير ذلك الكثير ...
            </p>

            <div className="flex flex-wrap gap-4 mt-8 text-center">
              <Link href="/clinics">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-green-500 sm:w-auto active:bg-green-500 hover:bg-green-700 transition duration-200 focus:outline-none focus:ring"
                  href="#"
                >
                  ابحث عن العيادات
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-green-600 sm:w-auto hover:text-green-700 active:text-green-500 focus:outline-none focus:ring"
                  href="#"
                >
                  يتعلم أكثر
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (language === "Hebrew") {
    content = (
      <section className="relative bg-white">
        <Image
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-50 sm:opacity-100"
          src="/images/landing/hair-transplant4.jpg"
          alt="Couple on a bed with a dog"
          layout="fill"
        />

        <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

        <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              הרופא המוסמך ביותר בטורקיה בהשתלת שיער
            </h1>

            <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
              נפגש עם הרופאים הטובים ביותר בהשתלות שיער, ניתוחי שיניים, הפריה
              חוץ גופית, פעולות אסתטיות ועוד...
            </p>

            <div className="flex flex-wrap gap-4 mt-8 text-center">
              <Link href="/clinics">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-green-500 sm:w-auto active:bg-green-500 hover:bg-green-700 transition duration-200 focus:outline-none focus:ring"
                  href="#"
                >
                  מצא מרפאות
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-green-600 sm:w-auto hover:text-green-700 active:text-green-500 focus:outline-none focus:ring"
                  href="#"
                >
                  למד עוד
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (language === "Russian") {
    content = (
      <section className="relative bg-white">
        <Image
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-50 sm:opacity-100"
          src="/images/landing/hair-transplant4.jpg"
          alt="Couple on a bed with a dog"
          layout="fill"
        />

        <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

        <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Самые квалифицированные врачи Турции по{" "}
              <strong className="font-extrabold text-green-500 sm:block">
                пересадке волос{" "}
              </strong>
            </h1>

            <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
              Познакомьтесь с лучшими врачами по пересадке волос,
              стоматологическим операциям, ЭКО, эстетическим операциям и многому
              другому...
            </p>

            <div className="flex flex-wrap gap-4 mt-8 text-center">
              <Link href="/clinics">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-green-500 sm:w-auto active:bg-green-500 hover:bg-green-700 transition duration-200 focus:outline-none focus:ring"
                  href="#"
                >
                  Найти клиники
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-green-600 sm:w-auto hover:text-green-700 active:text-green-500 focus:outline-none focus:ring"
                  href="#"
                >
                  учить больше
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (language === "Spanish") {
    content = (
      <section className="relative bg-white">
        <Image
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-50 sm:opacity-100"
          src="/images/landing/hair-transplant4.jpg"
          alt="Couple on a bed with a dog"
          layout="fill"
        />
        <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>
        <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Los médicos más calificados de Turquía en
              <strong className="font-extrabold text-green-500 sm:block">
                trasplante de cabello
              </strong>
            </h1>

            <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
              Reúnase con los mejores médicos en trasplante de cabello,
              operaciones dentales, FIV, operaciones esteticas y mucho mas...
            </p>

            <div className="flex flex-wrap gap-4 mt-8 text-center">
              <Link href="/clinics">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-green-500 sm:w-auto active:bg-green-500 hover:bg-green-700 transition duration-200 focus:outline-none focus:ring"
                  href="#"
                >
                  Encuentre Clínicas
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-green-600 sm:w-auto hover:text-green-700 active:text-green-500 focus:outline-none focus:ring"
                  href="#"
                >
                  Aprende Más
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (language === "Italian") {
    content = (
      <section className="relative bg-white">
        <Image
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-50 sm:opacity-100"
          src="/images/landing/hair-transplant4.jpg"
          alt="Couple on a bed with a dog"
          layout="fill"
        />

        <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

        <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              I medici più qualificati della Turchia nel
              <strong className="font-extrabold text-green-500 sm:block">
                trapianto di capelli
              </strong>
            </h1>

            <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
              Incontra i migliori medici in trapianto di capelli, operazioni
              dentistiche, fecondazione in vitro, operazioni estetiche e molto
              altro...
            </p>

            <div className="flex flex-wrap gap-4 mt-8 text-center">
              <Link href="/clinics">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-green-500 sm:w-auto active:bg-green-500 hover:bg-green-700 transition duration-200 focus:outline-none focus:ring"
                  href="#"
                >
                  Trova cliniche
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-green-600 sm:w-auto hover:text-green-700 active:text-green-500 focus:outline-none focus:ring"
                  href="#"
                >
                  Per saperne di più
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
