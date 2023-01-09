import Image from "next/image";
import Content from "./../../content-files/landing/collaboration.json";

const text = Content.filter((ele) => ele.name == "text");

export default function Contracts(props) {
  const { language } = props;

  return (
    <section className="my-16">
      <h2 className="text-center text-xl uppercase tracking-wider mb-2 text-slate-600">
        {/* Collaboration with best hospitals */}
        {text[0][language]}
      </h2>
      <div className="bg-brightPrimary h-60 sm:h-36 py-5 md:py-10 md:px-10 flex flex-col px-10 sm:flex-row items-center justify-evenly">
        <div className="inline-block">
          <Image
            src="/images/contracts/avicenna.webp"
            width={244}
            height={50}
          />
        </div>
        <div className="inline-block">
          <Image
            src="/images/contracts/clinicexpert.png"
            width={222}
            height={50}
          />
        </div>
        <div className="inline-block">
          <Image src="/images/contracts/medicana.png" width={180} height={30} />
        </div>
        <div className="inline-block">
          <Image src="/images/contracts/smile.png" width={100} height={80} />
        </div>
      </div>
    </section>
  );
}
