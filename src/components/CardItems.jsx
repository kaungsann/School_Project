import { useState } from "react";
import { useGetProductsQuery } from "../services/productApi";
import { useDispatch } from "react-redux";

import { addCart } from "../features/cartSlice";
import { Spinner } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function CardItems() {
  const [catId, setCatId] = useState(null);
  const { data, isLoading, error } = useGetProductsQuery({ categoryId: catId });

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  // const list = [
  //   {
  //     title: "Cort Toe Bag",
  //     img: "https://notebooktherapy.com/cdn/shop/products/d1e57ac3375c0ca5181c91d343e7d747_300x.png?v=1572456405",
  //     price: "$32.50 CAD",
  //   },
  //   {
  //     title: "Tsuki 'Our Stories' Washi Tape",
  //     img: "https://notebooktherapy.com/cdn/shop/files/01-our_stories-washi-carousel_300x.jpg?v=1684859938",
  //     price: "$54.48 CAD",
  //   },
  //   {
  //     title: "Tsuki Bullet Journal Stencill Set",
  //     img: "https://notebooktherapy.com/cdn/shop/products/0120_00763_300x.jpg?v=1672662415",
  //     price: "$10.00",
  //   },
  //   {
  //     title: "Tsuki 'Maple Moon' Limited Bullet Journal",
  //     img: "https://notebooktherapy.com/cdn/shop/files/02-maple_journey-notebook-moon-carousel_300x.jpg?v=1693431830",
  //     price: "$64.48 CAD",
  //   },
  //   {
  //     title: "Tsuki ‘Lunar Mystery’ Washi Tape Set ☾",
  //     img: "https://notebooktherapy.com/cdn/shop/files/01-lunar_mystery-washi-carousel_300x.jpg?v=1696296764",
  //     price: "$15.70",
  //   },
  //   {
  //     title: "Hinoki - ‘Travel Essentials’ Print-On Sticker Set",
  //     img: "https://notebooktherapy.com/cdn/shop/files/01-hinoki_cymk-sticker-carousel_fd5cb293-82ff-4722-b468-c381a1cc2a7c_300x.jpg?v=1715429218",
  //     price: "$8.00",
  //   },
  //   {
  //     title: "Tsuki Pop-up Pencil Case ☾",
  //     img: "https://notebooktherapy.com/cdn/shop/products/5U7A6678copy_300x.jpg?v=1652370200",
  //     price: "$7.50",
  //   },
  //   {
  //     title:
  //       "Tsuki Four Seasons: Winter Collector’s Edition 2023 Bullet Journal ☾",
  //     img: "https://notebooktherapy.com/cdn/shop/files/00-four_seasons_2023_winter-notebook-carousel_300x.jpg?v=1700885373",
  //     price: "$12.20",
  //   },
  // ];

  console.log("all product data is ", data);

  const handleClickAddToCart = (item) => {
    dispatch(addCart(item)); // Dispatch addCart action with the clicked item
  };

  return (
    <>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 w-11/12	mx-auto relative ">
        {data?.map((item, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col mx-3 cursor-pointer"
            onClick={() => navigateTo(`/product/detail/${item.id}`)}
          >
            <img
              alt={item.title}
              src={item.image1}
              className="w-full h-72 rounded-md"
            />
            <h5 className="text-sm font-bold mt-1.5 text-slate-900 font-sans">
              {item.name}
            </h5>
            <p className="text-slate-600 my-2 font-semibold text-lg">
              {item.price} mmk
            </p>
            <button
              onClick={() => handleClickAddToCart(item)}
              className="w-full py-2 bg-[#2F3132] hover:opacity-75 rounded-md shadow-md text-white font-sans font-bold"
            >
              Shop Now
            </button>
          </div>
        ))}
      </div>

      {isLoading && (
        <span className="w-4/5 mx-auto my-12 flex justify-center">
          <Spinner size="md" />
        </span>
      )}
      {error && (
        <span className="w-full my-4 flex justify-center text-red-600">
          {error?.error}
        </span>
      )}
    </>
  );
}

export default CardItems;
