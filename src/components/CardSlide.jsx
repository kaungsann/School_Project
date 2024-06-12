import { useCallback, useEffect, useState } from "react";
import data from "../utils/Images";
import { Icon } from "@iconify/react";

function CardSlide() {
  const slideImg = [
    "https://notebooktherapy.com/cdn/shop/files/3.png?v=1613737339",
    "https://notebooktherapy.com/cdn/shop/files/4.png?v=1613737339",
    "https://notebooktherapy.com/cdn/shop/files/1_2ca86cdc-679c-480e-888b-b125909f5b10.png?v=1613737339",
    "https://notebooktherapy.com/cdn/shop/files/2.png?v=1613737339",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  //   Next icons function
  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImg.length);
      setIsAnimating(false);
    }, 200);
  }, [isAnimating, slideImg.length]);

  //   Previous icons function
  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + slideImg.length) % slideImg.length
      );
      setIsAnimating(false);
    }, 200);
  };

  const handleDotClick = (index) => {
    if (isAnimating || currentIndex === index) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, handleNext]);

  return (
    <>
      <div className="flex justify-around w-3/5 mx-auto">
        {data.map((pd, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
          >
            <img
              src={pd.imgURL}
              alt={pd.imgAlt}
              className="w-16 h-16 rounded-full"
            />
            <span className="my-2 text-xs">{pd.title}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center my-12">
        <span className="text-2xl font-bold">JOIN</span>
        <span className="text-2xl font-bold">1 million+ followers</span>
        <span className="text-2xl font-bold">on instagram</span>
        <span className="flex mt-3">
          <Icon icon="ic:round-star" className="text-yellow-500 text-2xl" />
          <Icon icon="ic:round-star" className="text-yellow-500 text-2xl" />
          <Icon icon="ic:round-star" className="text-yellow-500 text-2xl" />
          <Icon icon="ic:round-star" className="text-yellow-500 text-2xl" />
          <Icon icon="ic:round-star" className="text-yellow-500 text-2xl" />
        </span>
      </div>

      <div className="relative">
        <div className="flex justify-center items-center">
          <button
            onClick={handlePrevious}
            className="text-3xl text-slate-600 border-slate-500 border-2 font-semibold w-12 h-12 flex justify-center items-center"
          >
            <Icon icon="solar:alt-arrow-left-linear" />
          </button>

          <img
            src={slideImg[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className={`w-8/12 h-full object-cover transition-opacity duration-500 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          />

          <button
            onClick={handleNext}
            className="text-3xl text-slate-600 border-2 border-slate-500 font-semibold w-12 h-12 flex justify-center items-center"
          >
            <Icon icon="solar:alt-arrow-right-linear" />
          </button>
        </div>
        <div className="flex justify-center">
          {slideImg.map((_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              className={`cursor-pointer rounded-full w-4 h-4 ml-2 ${
                index === currentIndex ? "bg-[#c98897]" : "bg-slate-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}

export default CardSlide;
