import React, { useState, useEffect } from "react";
import image1 from "../../Assets/silider-img/image-1.jpg";
import image2 from "../../Assets/silider-img/image-2.jpg";
import image3 from "../../Assets/silider-img/image-3.jpg";

const images = [image1, image2, image3];

const textData = [
  {
    title: "Image 1",
    description: "Description for Image 1",
  },
  {
    title: "Image 2",
    description: "Description for Image 2",
  },
  {
    title: "Image 3",
    description: "Description for Image 3",
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(timer);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  return (
    <div className="bg-white-700 text-black relative">
      <div className="container mx-auto flex flex-wrap justify-center items-center h-screen">
        <div className="w-full md:w-4/12 p-4">
          <h2 className="text-3xl font-bold">{textData[currentSlide].title}</h2>
          <p>{textData[currentSlide].description}</p>
          <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded">
            Register
          </button>
        </div>
        <div className="w-full md:w-8/12 relative">
          <img
            src={images[currentSlide]}
            alt={textData[currentSlide].title}
            className={`w-full h-auto ${
              imageLoaded
                ? "opacity-100"
                : "opacity-0 transition-opacity duration-3000"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute top-1/2 -mt-6 left-0 right-0 flex justify-between">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-80"
            >
              {"<"}
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover-bg-opacity-80"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
