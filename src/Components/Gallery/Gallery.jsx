// Package imports
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Gallery(props) {
  const { galleryData } = props;

  return (
    <div className="flex justify-center my-2 relative z-10">
      <div className="rounded-md flex justify-center align-middle items-center bg-black bg-opacity-60 text-white w-11/12 px-8 lg:w-2/3 pt-6 pb-2">
        <Carousel
          autoPlay
          className="w-full h-full flex flex-col justify-center items-center"
          infiniteLoop
          interval={galleryData.transitionInterval}
          transitionTime={galleryData.transitionTime}
        >
          {galleryData.images?.map((image, i) => (
            <div>
              <p className="mx-2 text-center pb-1">{image.label}</p>
              <img
                className="pointer-events-none transition-opacity"
                label={image.label}
                src={image.url}
                key={image.label + "_" + i}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
