import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const CalendlyEmbed = ({ url, onClose }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js",
    );
    head.appendChild(script);
  }, []);

  return (
    <div className="absolute left-1/2 top-1/2 z-40 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2">
      <div className="relative rounded-lg bg-pink-50 px-4 py-8 font-bold shadow-xl md:px-10">
        <button onClick={onClose} className="absolute right-0 top-0 m-4">
          <AiOutlineClose size={24} />
        </button>
        <h3 className="mb-6 text-center text-2xl">Schedule an Appointment</h3>
        <div
          className="calendly-inline-widget h-96 w-full md:h-[500px]"
          data-url="https://calendly.com/palmcapture/30min"
        />
      </div>
    </div>
  );
};

export default CalendlyEmbed;
