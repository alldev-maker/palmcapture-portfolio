export function WhatWeOffer() {
  const offers = [
    {
      bgColor: "pink-50",
      textColor: "pink-600",
      icon: "/red-offer-icon.svg",
      title: "Zero Obligation consult",
      description:
        "Embark on this journey with confidence. We understand your vision, needs, and preferences before committing to anything. Let’s chat, brainstorm, and explore possibilities together..",
    },
    {
      bgColor: "light-brown-50",
      textColor: "light-brown-600",
      icon: "/brown-offer-icon.svg",
      title: "72 hour previews",
      description:
        "The anticipation ends here. We understand the excitement of reliving memories, say goodbye to waiting weeks for a glimpse of your captured moments. With Palm Capture, expect previews within just 5 days",
    },
    {
      bgColor: "green-50",
      textColor: "green-600",
      icon: "/green-offer-icon.svg",
      title: "Access your pics online",
      description:
        "Convenience at your fingertips! Access your personalized online gallery to easy download your files, anywhere.",
    },
    {
      bgColor: "pink-50",
      textColor: "pink-600",
      icon: "/red-offer-icon.svg",
      title: "Quality over quantity",
      description:
        "We believe in the power of quality over quantity. We prioritize meaningful moments over mindless clicks, ensuring that every image resonates with authenticity and emotion.",
    },
  ];
  return (
    <section className="container py-8 sm:py-10">
      <h2 className="mb-6 text-center text-5xl text-brown-900 sm:mb-8 md:text-6xl">
        What We Offer
      </h2>
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:gap-9">
        <img
          src="we-offer.png"
          alt="we offer"
          className="w-full max-w-[545px] rounded-lg object-cover lg:w-1/2"
        />
        <ul className="flex flex-col gap-4 md:gap-6">
          <li className="rounded-lg bg-pink-50 p-4">
            <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-pink-600">
              <img src="/red-offer-icon.svg" alt="icon" />
              Zero Obligation consult
            </h3>
            <p className="mt-2 text-sm md:text-base">
              Embark on this journey with confidence. We understand your vision,
              needs, and preferences before committing to anything. Let’s chat,
              brainstorm, and explore possibilities together.
            </p>
          </li>
          <li className="rounded-lg bg-light-brown-50 p-4">
            <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-light-brown-600">
              <img src="/brown-offer-icon.svg" alt="icon" />
              72 hour previews
            </h3>
            <p className="mt-2 text-sm md:text-base">
              The anticipation ends here. We understand the excitement of
              reliving memories, say goodbye to waiting weeks for a glimpse of
              your captured moments. With Palm Capture, expect previews within
              just 5 days
            </p>
          </li>
          <li className="rounded-lg bg-green-50 p-4">
            <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-600">
              <img src="/green-offer-icon.svg" alt="icon" />
              Access your pics online
            </h3>
            <p className="mt-2 text-sm md:text-base">
              Convenience at your fingertips! Access your personalized online
              gallery to easy download your files, anywhere.
            </p>
          </li>
          <li className="rounded-lg bg-pink-50 p-4">
            <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-pink-600">
              <img src="/red-offer-icon.svg" alt="icon" />
              Quality over quantity
            </h3>
            <p className="mt-2 text-sm md:text-base">
              We believe in the power of quality over quantity. We prioritize
              meaningful moments over mindless clicks, ensuring that every image
              resonates with authenticity and emotion.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
