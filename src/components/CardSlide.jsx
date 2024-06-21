import { useCallback, useEffect, useState } from "react";
import data from "../utils/Images";
import { Icon } from "@iconify/react";

function CardSlide() {
  const slideImg = [
    "https://www.zugucase.com/cdn/shop/products/ZuguGiftCard_1_1024x1024.jpg?v=1638829884",
    "https://www.zugucase.com/cdn/shop/files/Zugu-Screen-wipe-box-2023-final2_1024x1024.jpg?v=1701709446",
    "https://www.zugucase.com/cdn/shop/files/product-image-3_d42fbb09-35a2-4ef3-a492-d563e0fa6104_1000x_1_1000x.webp?v=1706881202",
    "https://www.zugucase.com/cdn/shop/files/ZuguScreenProtector_11-12.9_1.jpg?v=1703801894",
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
            <span className="my-2 text-sm font-semibold">{pd.title}</span>
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
        <div className="flex justify-center items-center p-4">
          <button
            onClick={handlePrevious}
            className="text-3xl mr-6 text-slate-600 border-slate-500 border-2 font-semibold w-12 h-12 flex justify-center items-center"
          >
            <Icon icon="solar:alt-arrow-left-linear" />
          </button>

          <img
            src={slideImg[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className={`w-full h-[500px] object-cover transition-opacity duration-500 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          />

          <button
            onClick={handleNext}
            className="text-3xl ml-6 text-slate-600 border-2 border-slate-500 font-semibold w-12 h-12 flex justify-center items-center"
          >
            <Icon icon="solar:alt-arrow-right-linear" />
          </button>
        </div>
        <div className="flex justify-center mt-6">
          {slideImg.map((_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              className={`cursor-pointer rounded-full w-3 h-3 ml-2 ${
                index === currentIndex ? "bg-[#2F3132]" : "bg-slate-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}

export default CardSlide;
