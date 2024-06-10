import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import CalendlyEmbed from "../shared/CalendlyEmbed";

const HomeHero = ({ heading, summary, slides }) => {
  const calendlyRef = useRef();
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendlyRef.current && !calendlyRef.current.contains(event.target)) {
        setIsShown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <section className="relative">
      <div className="absolute left-1/2 top-1/2 z-10 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 px-4 text-left md:text-center">
        <h1 className="text-5xl font-bold text-white text-shadow-heading md:text-[80px] md:font-normal">
          {heading || "Palm Capture"}
        </h1>
        <button
          onClick={() => setIsShown(true)}
          className="mt-5 rounded-md bg-light-brown-500 p-2.5 text-center font-voyage text-lg font-bold text-white lg:text-2xl"
        >
          Book a session
        </button>
      </div>

      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Navigation, FreeMode]}
        className="home-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              className="h-full w-full object-cover object-center"
              src={slide.image.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute -bottom-60 left-1/2 z-10 w-full max-w-[676px] -translate-x-1/2 p-4 sm:-bottom-11">
        <div className="w-full rounded-md border border-brown-500 bg-white p-2 md:p-4">
          <p className="mb-2 text-center">
            {summary ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et, eget etiam etiam. Nunc, in amet, in. Sed sed, in. Nulla et, eget etiam etiam. Nunc, in amet, in. Sed sed, in."}
          </p>
          <img className="mx-auto" src="/symbol.svg" alt="symbol" />
        </div>
      </div>
      {isShown && (
        <div ref={calendlyRef}>
          <CalendlyEmbed onClose={() => setIsShown(false)} />
        </div>
      )}
    </section>
  );
};

export default HomeHero;
