import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import ImageGallery from "react-image-gallery";
import { PhotoProvider, PhotoView } from "react-photo-view";

const PortraitPersonal = ({ photos }) => {
  const galleryImages = photos.map((photo) => ({
    original: photo?.photo.url,
    thumbnail: photo?.photo.url,
  }));

  return (
    <section id="real_estate" className="container py-10">
      <h2 className="mb-6 text-center text-5xl font-bold text-brown-900 md:mb-8 md:text-6xl">
        Portrait & Personal
      </h2>
      <PhotoProvider>
        <div className="hidden grid-cols-3 grid-rows-2 gap-4 md:grid">
          <div className="row-span-2">
            <PhotoView src={photos[0]?.photo.url}>
              <img
                className="h-full w-full object-cover"
                src={photos[0]?.photo.url}
                alt="nature"
              />
            </PhotoView>
          </div>
          <div className="col-span-1">
            <PhotoView src={photos[1]?.photo.url}>
              <img
                className="h-full max-h-[343px] w-full object-cover"
                src={photos[1]?.photo.url}
                alt="nature"
              />
            </PhotoView>
          </div>
          <div className="col-span-1">
            <PhotoView src={photos[2]?.photo.url}>
              <img
                className="h-full max-h-[343px] w-full object-cover"
                src={photos[2]?.photo.url}
                alt="nature"
              />
            </PhotoView>
          </div>
          <div className="col-span-2 row-span-1">
            <PhotoView src={photos[3]?.photo.url}>
              <img
                className="h-full max-h-[343px] w-full object-cover"
                src={photos[3]?.photo.url}
                alt="nature"
              />
            </PhotoView>
          </div>
        </div>
      </PhotoProvider>

      <div className="hidden md:block">
        <PhotoProvider>
          <Swiper
            slidesPerView={4}
            spaceBetween={16}
            freeMode={true}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="potrait-swiper mt-4"
          >
            {photos.map((item, index) => (
              <SwiperSlide key={index}>
                <PhotoView src={item.photo.url}>
                  <img
                    className="h-[350px] w-full object-cover"
                    src={item.photo.url}
                  />
                </PhotoView>
              </SwiperSlide>
            ))}
          </Swiper>
        </PhotoProvider>
      </div>

      <div className="mt-4 md:hidden">
        <ImageGallery
          additionalClass="potrait-gallery"
          items={galleryImages}
          showPlayButton={false}
          showFullscreenButton={false}
        />
      </div>
    </section>
  );
};

export default PortraitPersonal;
