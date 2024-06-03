import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Montserrat } from "next/font/google";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-photo-view/dist/react-photo-view.css";

import "@/styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <PrismicPreview repositoryName={repositoryName} />
    </>
  );
}
