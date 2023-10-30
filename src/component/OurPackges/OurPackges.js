import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./OurPackges.css";

const images = [
  {
    src: "slider-img/image-1.jpg",
    title: "Image 1",
    description: "Description for Image 1",
  },
  {
    src: "slider-img/image-2.jpg",
    title: "Image 2",
    description: "Description for Image 2",
  },
  {
    src: "slider-img/image-3.jpg",
    title: "Image 3",
    description: "Description for Image 3",
  },
  {
    src: "slider-img/image-5.jpg",
    title: "Image 4",
    description: "Description for Image 4",
  },
  {
    src: "slider-img/image-6.jpg",
    title: "Image 5",
    description: "Description for Image 5",
  },
  {
    src: "slider-img/image-7.jpg",
    title: "Image 6",
    description: "Description for Image 6",
  },
  // Add more image objects as needed
];

function OurPackages() {
  return (
    <div className="mt-12">
      <div className="container mx-auto">
        <h1 className="text-center text-5xl mb-5">
          Our Most Popular <span className="text-orange-500">Package</span>
        </h1>
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          dynamicHeight={true}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={100}
          emulateTouch={true}
          autoPlay={true}
          interval={3000}
          showIndicators={false}
        >
          {images.map((image, index) => (
            <div key={index} className="image-slide">
              <img
                src={image.src}
                alt={image.title}
                className="image-shadow mx-auto w-full image-slide img"
                style={{ height: "600px" }} // Default width for larger screens
              />
              <p className="legend text-center">
                <h4 className="text-2xl">{image.title}</h4>
                <br />
                <span className="text-lg">{image.description}</span>
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default OurPackages;
