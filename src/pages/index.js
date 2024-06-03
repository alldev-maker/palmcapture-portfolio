import { createClient } from "@/prismicio";
import { Layout } from "@/components/shared/Layout";
import PortfolioSection from "@/components/Home/PortfolioSection";
import ServicesSection from "@/components/Home/ServicesSection";
import HomeHero from "@/components/Home/Hero";

export default function Index({ page }) {
  const { data } = page;
  return (
    <Layout>
      <HomeHero
        heading={data.heading}
        summary={data.summary}
        slides={data.hero_slides}
      />
      <ServicesSection services={data.services} />
      <PortfolioSection bgImage={data.portfolio_bg.url} />
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage");

  return {
    props: { page },
  };
}
