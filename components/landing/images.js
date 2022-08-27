import Image from "next/image";

export default function Images() {
  return (
    <section className="overflow-hidden text-gray-700 px-4 py-24">
      <h2 className="text-lg text-center">
        Get your operation done by the best surgeons in Istanbul and enjoy
        Istanbul&apos;s views, food and culture!
      </h2>
      <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/images/landing/images-section/avicenna-atasehir.webp" width="100%" height="100%" layout="responsive" objectFit="cover"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/images/landing/images-section/atasehir.webp" width="100%" height="100%" layout="responsive" objectFit="cover"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/images/landing/images-section/istanbul2.webp" width="100%" height="100%" layout="responsive" objectFit="cover"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/images/landing/images-section/istanbul.webp" width="100%" height="100%" layout="responsive" objectFit="cover"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/images/landing/images-section/plastic-surgeries.webp" width="100%" height="100%" layout="responsive" objectFit="cover"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/images/landing/images-section/quality.webp" width="100%" height="100%" layout="responsive" objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
