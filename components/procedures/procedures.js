import Image from "next/image";
import Link from "next/link";

export default function Procedures(props) {
  const { procedures } = props;

  return (
    <section className=" mt-3 px-6 sm:px-16">
      <h1 className="text-2xl uppercase font-bold tracking-wider mb-3 text-center">All Procedures</h1>
      <h4 className="text-gray-700 text-md text-center mb-6">Pick the procedure you want and find best clinics!</h4>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5">
        {procedures.map((procedure) => {
          return (
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
              <a href="#">
                <Image
                  class="rounded-t-lg"
                  src={procedure.image}
                  alt=""
                  width={350}
                  height={200}
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight ">
                    {procedure.title}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {procedure.description}
                </p>
                <Link href={`/procedures/${procedure.slug}`}>
                  <a
                    href="#"
                    class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-brightPrimary rounded-lg hover:bg-darkPrimary focus:ring-4 focus:outline-none focus:ring-purple-300"
                  >
                    Find Clinics
                    <svg
                      aria-hidden="true"
                      class="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
