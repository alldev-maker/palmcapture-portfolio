import { createClient } from "@/prismicio";
import { Layout } from "@/components/shared/Layout";
import RealEstate from "@/components/Portfolio/RealEstate";
import PortraitPersonal from "@/components/Portfolio/PortraitPersonal";
import ArialServices from "@/components/Portfolio/ArialServices";

export default function Portfolio({ page, global }) {
  const { data } = page;
  const { data: globalData } = global;

  return (
    <Layout globalData={globalData}>
      <section className="bg-portfolio bg-cover bg-no-repeat">
        <h1 className="container py-14 text-center text-5xl font-bold text-white md:py-20 md:text-[80px]">
          Portfolio
        </h1>
      </section>
      <RealEstate photos={data.realestate_photos} />
      <PortraitPersonal photos={data.portrait_photos} />
      <ArialServices photos={data.arial_photos} />
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("portfolio");
  const global = await client.getSingle("global");

  return {
    props: { page, global },
  };
}
