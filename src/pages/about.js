import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";

import { Layout } from "@/components/shared/Layout";
import ContactForm from "@/components/shared/ContactFrom";

export default function About({ page }) {
  const { data } = page;
  return (
    <Layout>
      <section className="relative pb-10 pt-6 md:pb-32 md:pt-10">
        <h1 className="text-center text-6xl text-brown-900 md:text-[80px]">
          About Me
        </h1>
        <img className="mx-auto mt-4" src="/symbol2.svg" alt="symbol" />
        <div className="mx-4">
          <img
            className="mx-auto mt-8 h-full max-h-[400px] w-full max-w-[713px] rounded-md object-cover md:max-h-[756px]"
            src={data.avatar.url}
            alt="about me"
          />
        </div>

        <div className="absolute -bottom-20 left-1/2 z-10 w-full max-w-[690px] -translate-x-1/2 px-6 md:bottom-4">
          <div className="w-full rounded-md border border-brown-500 bg-white p-2.5">
            <PrismicRichText field={data.summary} />
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center md:mt-10 md:bg-brown-500 md:py-20">
        <ContactForm />
      </section>
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("about");

  return {
    props: { page },
  };
}
