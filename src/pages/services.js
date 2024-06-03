import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";

import { Layout } from "@/components/shared/Layout";

export default function Services({ page }) {
  const { data } = page;

  return (
    <Layout>
      <section className="bg-service bg-cover bg-center bg-no-repeat px-4 py-16 md:py-24">
        <div className="mx-auto max-w-[613px]">
          <h1 className="mb-4 text-5xl font-bold text-white text-shadow-heading md:mb-6 md:text-center md:text-[80px] md:font-normal">
            {data.headline}
          </h1>
          <p className="texsh text-white text-shadow-body md:text-center">
            {data.brief}
          </p>
        </div>
      </section>
      <section className="container my-10">
        {data.services.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-4 border-b border-[#8F9191] py-10 md:flex-row md:justify-center"
          >
            <div className="w-full md:w-1/2">
              <h2 className="mb-2 text-4xl font-bold text-brown-900 md:text-6xl">
                {item.title}
              </h2>
              <h3 className="mb-4 text-lg font-bold text-pink-500 md:text-2xl">
                {item.subtitle}
              </h3>
              <div className="service-richtext">
                <PrismicRichText field={item.content} />
              </div>
            </div>
            <img
              src={item.image.url}
              alt="service"
              className="w-full max-w-[500px] object-cover md:w-1/2"
            />
          </div>
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("services");

  return {
    props: { page },
  };
}
