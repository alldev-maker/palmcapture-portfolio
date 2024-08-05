import { useState, useRef, useEffect } from "react";
import CalendlyEmbed from "./CalendlyEmbed";

export function ContactUs({ contactBg, content }) {
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
    <section
      className="relative bg-cover bg-center bg-no-repeat py-[100px]"
      style={{
        backgroundImage: `url(${contactBg})`,
      }}
    >
      <div className="container flex flex-col items-center gap-4">
        <h2 className="text-center text-4xl font-bold text-white md:text-6xl">
          Contact us Today
        </h2>
        <p className="max-w-[612px] text-center text-white">{content}</p>
        <button
          onClick={() => setIsShown(true)}
          className="rounded-md bg-brown-500 p-2.5 text-center font-voyage text-lg font-bold text-white lg:text-2xl"
        >
          Book a session
        </button>
      </div>
      {isShown && (
        <div ref={calendlyRef}>
          <CalendlyEmbed onClose={() => setIsShown(false)} />
        </div>
      )}
    </section>
  );
}
