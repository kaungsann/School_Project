import { useState } from "react";

function Blogs() {
  const blogs = [
    {
      image: "https://www.skullcandy.com/cdn/shop/files/Group_3791.jpg?",
      title: "SHOP TRIPLE THREAT",
    },
    {
      image:
        "https://www.skullcandy.com/cdn/shop/files/Group_3792.jpg?format=pjpg&amp;v=1709240802&amp;width=1500",
      title: "EXPLORE LIMITED EDITION",
    },
    {
      image:
        "https://www.skullcandy.com/cdn/shop/files/HP-Collections_shop-Speakers_stomp_c6060308-1c1a-4c61-aa24-77e0144b9d69.png?format=pjpg&amp;v=1710378555&amp;width=1500",
      title: "SHOP SPEAKERS",
    },
    {
      image:
        "https://www.skullcandy.com/cdn/shop/files/Group_3792.jpg?format=pjpg&amp;v=1709240802&amp;width=1500",
      title: "BRING THE PARTY",
    },
    {
      image:
        "https://www.skullcandy.com/cdn/shop/files/HP-Collections_shop-Speakers_stomp_c6060308-1c1a-4c61-aa24-77e0144b9d69.png?format=pjpg&amp;v=1710378555&amp;width=1500",
      title: "ON THE GO",
    },
    {
      image:
        "https://www.skullcandy.com/cdn/shop/files/Group_3792.jpg?format=pjpg&amp;v=1709240802&amp;width=1500",
      title: "WATERPROOF",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <section>
        <div className="flex justify-center items-center my-12">
          <span className="h-2 text-slate-500 bg=[#2f3132]"></span>
          <span className="text-4xl font-extrabold ">COLLECTIONS</span>
          <span className="h-2 text-slate-500"></span>
        </div>
        <div className=" mb-6 slider-container w-11/12 mx-auto">
          <div
            className="grid grid-cols-6 overflow-hidden"
            style={{
              transition: "transform 0.3s ease-in-out",
              transform: `translateX(-${(currentIndex * 100) / totalPages}%)`,
              width: `${(100 / itemsPerPage) * blogs.length}%`,
            }}
          >
            {blogs.map((bl, index) => (
              <div
                className="slide flex flex-col items-center relative"
                key={index}
              >
                <img
                  src={bl.image}
                  alt={bl.title}
                  className="max-w-full bg-orange-300 rounded-lg"
                />
                <h4 className="text-5xl text-center flex text-white font-extrabold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col justify-center items-center">
                  {bl.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              className={`cursor-pointer w-3 h-3 mx-1 rounded-full border-solid	 ${
                currentIndex === index ? "bg-[#2f3132]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Blogs;
