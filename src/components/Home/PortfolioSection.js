import Link from "next/link";

const PortfolioSection = ({ bgImage }) => (
  <section
    className="flex items-center justify-center bg-cover bg-no-repeat px-8 py-20 md:py-56"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="mx-auto flex w-full max-w-[772px] flex-col items-center gap-4 rounded-2xl bg-home-portfolio px-4 py-6 text-center backdrop-blur-md md:gap-6 md:py-10">
      <h2 className="text-5xl text-white md:text-[80px]">Portfolio</h2>
      <p className="max-w-lg text-white">
        Immerse yourself in the beauty and detail of our photography. Click
        below to explore more from each category
      </p>
      <Link
        href="/portfolio"
        className="rounded-md bg-light-brown-500 p-2.5 text-center font-voyage text-2xl font-bold text-white lg:text-3xl"
      >
        View Our work!
      </Link>
    </div>
  </section>
);

export default PortfolioSection;
