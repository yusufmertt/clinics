import Image from "next/image";

export default function Contracts() {
  return (
    <section className="">
      <h2 className="text-center text-xl uppercase tracking-wider mb-2 text-slate-600">Collaboration with best hospitals</h2>
      <div className="bg-yellow-400 h-60 sm:h-36 py-5 md:py-10 md:px-10 flex flex-col px-10 sm:flex-row items-center justify-evenly">
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
          <Image src="/images/contracts/smile.png" width={100} height={80} />
        </div>
      </div>
    </section>
  );
}
5