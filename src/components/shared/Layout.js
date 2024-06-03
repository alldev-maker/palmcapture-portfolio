import { Header } from "./Header";
import { Footer } from "./Footer";
import { ContactUs } from "./ContactUs";
import { WhatWeOffer } from "./WhatWeOffer";

export function Layout({ children }) {
  return (
    <div className="text-slate-700">
      <Header />
      <main>
        {children}
        <WhatWeOffer />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
