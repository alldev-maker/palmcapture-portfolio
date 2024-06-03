import Link from "next/link";

const ServicesSection = ({ services }) => {
  return (
    <section className="container pb-10 pt-64 md:py-20">
      <h2 className="mb-6 text-left text-5xl font-bold text-brown-900 sm:mb-8 md:text-center md:text-6xl">
        Services
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[9fr,6fr] md:grid-rows-2">
        <Link
          href="/services"
          className="relative flex flex-col items-center justify-center"
        >
          <img
            className="h-full w-full rounded-xl object-cover"
            src={services[0].image.url}
            alt={services[0].title}
          />
          <h3 className="absolute bottom-0 left-0 p-4 text-3xl font-bold text-white md:p-5 md:text-5xl">
            {services[0].title}
          </h3>
        </Link>
        <Link
          href="/services"
          className="relative flex flex-col items-center justify-center md:row-span-2"
        >
          <img
            className="h-full w-full rounded-xl object-cover"
            src={services[1].image.url}
            alt={services[1].title}
          />
          <h3 className="absolute bottom-0 left-0 p-4 text-3xl font-bold text-white md:p-5 md:text-5xl">
            {services[1].title}
          </h3>
        </Link>
        <Link
          href="/services"
          className="relative flex flex-col items-center justify-center"
        >
          <img
            className="h-full w-full rounded-xl object-cover"
            src={services[2].image.url}
            alt={services[2].title}
          />
          <h3 className="absolute bottom-0 left-0 p-4 text-3xl font-bold text-white md:p-5 md:text-5xl">
            {services[2].title}
          </h3>
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
