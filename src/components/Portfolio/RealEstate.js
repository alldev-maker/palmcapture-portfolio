import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import ImageGallery from "react-image-gallery";
import { PhotoProvider, PhotoView } from "react-photo-view";

const RealEstate = ({ photos }) => {
  const galleryImages = photos.map((photo) => ({
    original: photo?.photo.url,
    thumbnail: photo?.photo.url,
  }));

  return (
    <section id="real_estate" className="container py-10">
      <h2 className="mb-6 text-center text-5xl font-bold text-brown-900 md:mb-8 md:text-6xl">
        Real Estate
      </h2>
      <PhotoProvider>
        <div className="hidden grid-cols-2 gap-4 md:grid md:grid-cols-4">
          <div className="col-span-2">
            <PhotoView src={photos[0]?.photo.url}>
              <img
                className="h-full max-h-[368px] w-full object-cover"
                src={photos[0]?.photo.url}
                alt="nature"
              />
            </PhotoView>
          </div>
          <div>
            <PhotoView src={photos[1]?.photo.url}>
              <img
                className="h-full max-h-[368px] w-full object-cover"
                src={photos[1]?.photo.url}
                alt="nature"
              />
            </PhotoView>
          </div>
          <div>
            <PhotoView src={photos[2]?.photo.url}>
              <img
                className="h-full max-h-[368px] w-full object-cover"
                src={photos[2]?.photo.url}
                alt="nature"
              />
            </PhotoView>
          </div>
          <div className="col-span-2">
            <PhotoView src={photos[3]?.photo.url}>
              <img
                className="h-full max-h-[368px] w-full object-cover"
                src={photos[3]?.photo.url}
                alt="nature"
              />
            </PhotoView>
          </div>
          <div className="col-span-2">
            <PhotoView src={photos[4]?.photo.url}>
              <img
                className="h-full max-h-[368px] w-full object-cover"
                src={photos[4]?.photo.url}
                alt="nature"
              />
            </PhotoView>
          </div>
        </div>
      </PhotoProvider>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 md:hidden">
        <div className="relative flex flex-col items-center justify-center">
          <img
            className="h-full w-full object-cover"
            src={photos[0]?.photo.url}
          />
        </div>
        <div className="relative row-span-2 flex flex-col items-center justify-center">
          <img
            className="h-full w-full object-cover"
            src={photos[1]?.photo.url}
          />
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <img
            className="h-full w-full object-cover"
            src={photos[2]?.photo.url}
          />
        </div>
      </div>

      <div className="hidden md:block">
        <PhotoProvider>
          <Swiper
            slidesPerView={2}
            spaceBetween={16}
            freeMode={true}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="realestate-swiper mt-4"
          >
            {photos.map((item, index) => (
              <SwiperSlide
                className="h-[297px] w-full max-w-[506px]"
                key={index}
              >
                <PhotoView src={item?.photo.url}>
                  <img
                    className="h-full w-full object-cover"
                    src={item?.photo.url}
                  />
                </PhotoView>
              </SwiperSlide>
            ))}
          </Swiper>
        </PhotoProvider>
      </div>

      <div className="mt-4 md:hidden">
        <ImageGallery
          additionalClass="realestate-gallery"
          items={galleryImages}
          showPlayButton={false}
          showFullscreenButton={false}
        />
      </div>
    </section>
  );
};

export default RealEstate;
