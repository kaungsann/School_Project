import { useState } from "react";

function Blogs() {
  const blogs = [
    {
      image:
        "https://notebooktherapy.com/cdn/shop/articles/unnamed_f5b50c64-76ac-4faf-b9f8-3c75eb51438e_570x.png?v=1716394797",
      title: "Monthly Calendar Printable 📆",
      date: "By Notebook Therapy On May 22, 2024",
      text: " Monthly Calendar Printable 📆 New month, new free monthly calendar printable! 🍋✨ This June, we are taking you to the loveliest Italian countryside with our fresh calendar printable! Perfect for planning for your...",
    },
    {
      image:
        "https://notebooktherapy.com/cdn/shop/articles/unnamed_f5b50c64-76ac-4faf-b9f8-3c75eb51438e_570x.png?v=1716394797",
      title: "Monthly Phone Wallpaper ✨",
      date: "By Notebook Therapy On May 22, 2024",
      text: "Monthly Phone Wallpaper ✨ New month, new phone wallpaper! 🍋✨ If you love all things fresh + bright you will love this summer Italian countryside-themed free phone wallpaper with a calendar to help...",
    },
    {
      image:
        "https://notebooktherapy.com/cdn/shop/articles/unnamed_75555790-7100-4c00-96b4-d0dada16e230_570x.jpg?v=1716394680",
      title: "Monthly Phone Wallpaper ✨",
      date: "By Notebook Therapy On May 22, 2024",
      text: "Monthly Phone Wallpaper ✨ New month, new phone wallpaper! 🍋✨ If you love all things fresh + bright you will love this summer Italian countryside-themed free phone wallpaper with a calendar to help...",
    },
    {
      image:
        "https://i.shgcdn.com/08800387-dab0-48ed-a117-0dfb8c82de19/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      title: "Monthly Calendar Printable 📆",
      date: "By Notebook Therapy On April 24, 2024",
      text: "Monthly Calendar Printable 📆 New month, new free monthly calendar printable! 🦦✨ This April, we are bringing you the cutest little otter friends to keep you company with our free calendar printable! Perfect...",
    },
    {
      image:
        "https://i.shgcdn.com/9838a782-5e77-4552-b333-e12508d2bdfb/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      title: "Monthly Calendar Printable 📆",
      date: "By Notebook Therapy On March 24, 2024",
      text: "Monthly Phone Wallpaper ✨ New month, new phone wallpaper! 🦦✨ If you love all things cute and cuddly, you will love this otter-themed free phone wallpaper with a calendar to help you get...",
    },
    {
      image:
        "https://notebooktherapy.com/cdn/shop/articles/unnamed_ef7a555d-b950-4ea7-aba3-740c348b1eff_570x.jpg?v=1713772676",
      title: "Monthly Phone Wallpaper Printable ✨",
      date: "By Notebook Therapy On FEBRUARY 23, 2024",
      text: "Monthly Phone Wallpaper ✨ New month, new phone wallpaper! 🦦✨ If you love all things cute and cuddly, you will love this otter-themed free phone wallpaper with a calendar to help you get...",
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
        <div className="flex justify-center items-center my-8">
          <span className="h-2 text-slate-500"></span>
          <span className="text-xl font-bold">BLOG POSTS 📝</span>
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
              <div className="slide flex flex-col items-center" key={index}>
                <img src={bl.image} alt={bl.title} className="max-w-full" />
                <h4 className="text-lg font-semibold mt-6">{bl.title}</h4>
                <p className="my-2 text-slate-500 text-sm">{bl.date}</p>
                <p className="text-sm text-center w-80">{bl.text}</p>
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
                currentIndex === index ? "bg-pink-400" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Blogs;
