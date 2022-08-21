import Image from "next/image";

export default function Contracts() {
  return (
    <section className="">
      <h2 className="text-center text-xl uppercase tracking-wider mb-2 text-slate-600">Collaboration with best hospitals</h2>
      <div className="bg-blue-300 h-72 sm:h-36 py-5 md:py-10 md:px-10 flex flex-col px-10 sm:flex-row items-center justify-evenly">
        <div className="inline-block">
          <Image
            src="/images/contracts/avicenna.webp"
            width={293}
            height={60}
          />
        </div>
        <div className="inline-block">
          <Image
            src="/images/contracts/medicalpark.png"
            width={380}
            height={60}
          />
        </div>
        <div className="inline-block">
          <Image src="/images/contracts/medicana.png" width={280} height={60} />
        </div>
      </div>
    </section>
  );
}
