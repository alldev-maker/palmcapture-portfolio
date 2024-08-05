import { Header } from "./Header";
import { Footer } from "./Footer";
import { ContactUs } from "./ContactUs";
import { WhatWeOffer } from "./WhatWeOffer";

export function Layout({ children, globalData }) {
  return (
    <div className="text-slate-700">
      <Header />
      <main>
        {children}
        <WhatWeOffer offerBg={globalData.offer_image?.url} />
        <ContactUs
          contactBg={globalData.contact_bg?.url}
          content={globalData?.content}
        />
      </main>
      <Footer />
    </div>
  );
}
