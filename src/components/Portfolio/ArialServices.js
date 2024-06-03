import ImageGallery from "react-image-gallery";

const ArialServices = ({ photos }) => {
  const galleryImages = photos.map((photo) => ({
    original: photo?.photo.url,
    thumbnail: photo?.photo.url,
  }));

  return (
    <section id="real_estate" className="container py-10">
      <h2 className="mb-6 text-center text-5xl font-bold text-brown-900 md:mb-8 md:text-6xl">
        Arial Services
      </h2>

      <ImageGallery
        additionalClass="arial-gallery"
        items={galleryImages}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </section>
  );
};

export default ArialServices;
