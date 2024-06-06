import { useState } from "react";
import { Icon } from "@iconify/react";

function SlideItems() {
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
      title: "  Monthly Calendar Printable 📆",
      date: "By Notebook Therapy On March 24, 2024",
      text: "Monthly Phone Wallpaper ✨ New month, new phone wallpaper! 🦦✨ If you love all things cute and cuddly, you will love this otter-themed free phone wallpaper with a calendar to help you get...",
    },
    {
      image:
        "https://i.shgcdn.com/9838a782-5e77-4552-b333-e12508d2bdfb/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      title: "  Monthly Calendar Printable 📆",
      date: "By Notebook Therapy On FEBRUARY 24, 2024",
      text: "Monthly Phone Wallpaper ✨ New month, new phone wallpaper! 🦦✨ If you love all things cute and cuddly, you will love this otter-themed free phone wallpaper with a calendar to help you get...",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  };
  return (
    <>
      <section>
        <div className="flex justify-center items-center mb-6">
          <span className="h-2 text-slate-500"></span>
          <span className="text-xl font-bold">BLOG POSTS 📝</span>
          <span className="h-2 text-slate-500"></span>
        </div>
        {/* <div className="grid gap-4 grid-cols-3">
          {blogs.map((bl) => (
            <>
              <div
                className="flex flex-col items-center cursor-pointer"
                key={bl.title}
              >
                <img src={bl.image} alt={bl.title} className="w-96 h-48" />
                <h4 className="text-lg font-semibold">{bl.title}</h4>
                <p className="my-2 text-slate-500 text-sm">{bl.date}</p>
                <p className="text-sm text-center w-80">{bl.text}</p>
              </div>
            </>
          ))}
        </div> */}
        <div className="relative flex justify-center items-center mb-6">
          <button onClick={handlePrev} className="absolute left-0">
            <Icon icon="mdi:chevron-left" className="text-3xl" />
          </button>
          <div className="flex flex-col items-center">
            <img
              src={blogs[currentIndex].image}
              alt={blogs[currentIndex].title}
              className="w-60 h-96"
            />
          </div>
          <button onClick={handleNext} className="absolute right-0">
            <Icon icon="mdi:chevron-right" className="text-3xl" />
          </button>
        </div>
        <div className="flex justify-center">
          {blogs.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default SlideItems;
