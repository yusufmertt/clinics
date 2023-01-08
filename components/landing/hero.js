import Link from "next/link";
import Image from "next/image";
import Content from "./../../content-files/landing/hero.json";

function Hero(props) {
  const { language } = props;
  let content = [];

  const btn1 = Content.filter((ele) => ele.name == "btn1");
  const btn2 = Content.filter((ele) => ele.name == "btn2");
  const h1_1 = Content.filter((ele) => ele.name == "h1_1");
  const h1_2 = Content.filter((ele) => ele.name == "h1_2");

  return (
    <section className="relative bg-white">
      <Image
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-20 sm:opacity-100"
        src="/images/landing/hero2-upscale.jpg"
        alt="Hero"
        layout="fill"
        priority
      />

      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

      <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-800">
            {/* Turkey&apos;s most qualified doctors in&nbsp;
            <strong className="font-extrabold text-brightPrimary block">
              aesthetic operations
            </strong> */}
            {h1_1[0][language]}
            <strong className="font-extrabold text-brightPrimary block">
              {h1_2[0][language]}
            </strong>
          </h1>

          {/* <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            Meet with best doctors in{" "}
            <strong>
              <Link href="/procedures/hair-transplant">
                <a htef="#" className="text-brightPrimary underline">
                  hair transplant
                </a>
              </Link>
              , dental operations, eye surgeries, rhinoplasty, liposuction,
              breast augmentation, gastric sleeve
            </strong>{" "}
            and much more...
          </p> */}

          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <Link href="/clinics">
              <a
                className="block w-full px-12 py-3 text-md font-bold text-white rounded shadow bg-brightPrimary sm:w-auto active:bg-brightPrimary hover:bg-darkPrimary transition duration-200 focus:outline-none focus:ring"
                href="#"
              >
                {/* {Content.map((item) => {
                  if (item.language === language) {
                    return item.btn1;
                  }
                })} */}
                {btn1[0][language]}
              </a>
            </Link>
            <Link href="/contact">
              <a
                className="block w-full px-12 py-3 text-md font-medium bg-white rounded shadow text-brightPrimary sm:w-auto hover:text-darkPrimary active:text-brightPrimary focus:outline-none focus:ring"
                href="#"
              >
                {btn2[0][language]}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
