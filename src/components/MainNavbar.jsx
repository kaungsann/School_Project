import { Input } from "@nextui-org/react";

// import { useDispatch, useSelector } from "react-redux";
// import { useLogoutMutation } from "../services/authAPI";
// import { removeCredentials } from "../features/authSlice";
// import { useNavigate } from "react-router-dom";
// import { resetStore } from "../store";
import logo from "../assets/images/notebook.png";
// import { Avatar, Input } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import CurrencyFlags from "./CurrencyFlags";
import "../App.css";
import { useEffect, useState } from "react";

const MainNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const [logout, { isLoading }] = useLogoutMutation();
  // const dispatch = useDispatch();
  // const navigateTo = useNavigate();
  // const { user, tokens } = useSelector((state) => state.auth);

  // const menuItems = [
  //   ["Tasks", "/tasks"],
  //   ["Users", "/users"],
  //   ["Project", "/projects"],
  //   ["My Settings", "/setting"],
  //   ["Summary", "/summary"],
  // ];

  // const handleLogout = async () => {
  //   logout(tokens.refresh.token)
  //     .unwrap()
  //     .then(() => {
  //       dispatch(removeCredentials());
  //       dispatch(resetStore());
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  console.log("focus is a", isFocused);

  return (
    <>
      <div className="bg-[#FFFFFF] relative">
        <div className="flex justify-end">
          <CurrencyFlags />
          <Input
            type="search"
            placeholder="Search Product Name"
            variant="bordered"
            size="md"
            labelPlacement="outside"
            className="max-w-sm md:max-w-md lg:w-96 ml-3 rounded-sm"
            endContent={<Icon icon="mdi:search" className="text-xl" />}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {isFocused && (
            <div className="absolute w-3/5 right-0 top-8 mt-2 rounded-md h-72 z-40 bg-white border border-gray-300 shadow-lg p-4">
              <div className="flex">
                <div className="w-72">
                  <h5 className="underline-offset-8 text-md font-semibold	decoration-solid decoration-4">
                    POPULAR SEARCHS
                  </h5>
                  <ul className="my-4">
                    <li className="flex items-center px-3 py-2 rounded-md hover:bg-slate-100 cursor-pointer">
                      <Icon icon="mdi:search" className="text-2xl" />
                      <span className="ml-2 font-bold text-[#9333ea]">
                        travel notebook
                      </span>
                    </li>
                    <li className="flex items-center px-3 py-2 rounded-md hover:bg-slate-100 cursor-pointer">
                      <Icon icon="mdi:search" className="text-2xl" />
                      <span className="ml-2 font-bold text-[#9333ea]">
                        bullet Journal
                      </span>
                    </li>
                    <li className="flex items-center px-3 py-2 rounded-md hover:bg-slate-100 cursor-pointer">
                      <Icon icon="mdi:search" className="text-2xl" />
                      <span className="ml-2 font-bold text-[#9333ea]">
                        Bullet Journal set
                      </span>
                    </li>
                    <li className="flex items-center px-3 py-2 rounded-md hover:bg-slate-100 cursor-pointer">
                      <Icon icon="mdi:search" className="text-2xl" />
                      <span className="ml-2 font-bold text-[#9333ea]">
                        Washi Tape
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="ml-6">
                  <h5 className="underline-offset-8 text-md	decoration-solid decoration-4 font-semibold">
                    PRODUCTS
                  </h5>
                  <h6 className="text-[#7c3aed] mt-4">
                    Start typing for search results
                  </h6>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between my-4 cursor-pointer">
          <img src={logo} alt="logoImg" className="w-60 h-6 ml-16" />
          <div className="mr-12 flex items-center">
            <Icon
              icon="ant-design:shopping-outlined"
              className="text-3xl mx-1.5"
            />
            <span>Shopping Cart</span>
            <span className="text-sm rounded-full px-2 py-1 bg-pink-100 font-semibold ml-2">
              5
            </span>
          </div>
        </div>
      </div>
      <div className="py-4 sticky top-0 bg-[#FFFFFF] z-30">
        {isScrolled && (
          <div className="absolute right-8 cursor-pointer">
            <Icon icon="ant-design:shopping-outlined" className="text-3xl" />
            <span className="text-sm rounded-full px-2 py-1 bg-pink-100 font-semibold absolute -top-3 -right-3">
              5
            </span>
          </div>
        )}
        {isScrolled && (
          <Icon
            icon="mdi:search"
            className="text-3xl absolute right-8 text-slate-600 w-12 cursor-pointer font-semibold border-x-2 mx-8"
          />
        )}
        <ul className="flex justify-center">
          <li className="text-md flex items-center cursor-pointer relative group">
            <span className="text-slate-600 font-bold">All Categories</span>
            <span>
              <Icon
                icon="bxs:hand-down"
                className="text-lg text-yellow-500 ml-1.5"
              />
            </span>
            <div className="hidden absolute bg-white w-60 z-40 shadow-lg p-4 top-full mt-1 left-0 group-hover:block">
              <ul>
                <li className="text-md py-2 border-b-2 border-slate-200 hover:text-pink-400">
                  Notebooks
                </li>
                <li className="text-md py-2 border-b-2 border-slate-200 hover:text-pink-400">
                  Bullet Journals
                </li>
                <li className="text-md py-2 border-b-2 border-slate-200 hover:text-pink-400">
                  Stamps
                </li>
                <li className="text-md py-2 border-b-2 border-slate-200 hover:text-pink-400">
                  Washi Tape
                </li>
                <li className="text-md py-2 border-b-2 border-slate-200 hover:text-pink-400">
                  Pencils Case
                </li>
                <li className="text-md py-2 border-b-2 border-slate-200 hover:text-pink-400">
                  Bags
                </li>
                <li className="text-md py-2 border-b-2 border-slate-200 hover:text-pink-400">
                  Pens
                </li>
                <li className="text-md py-2 border-b-2 border-slate-200 hover:text-pink-400">
                  Stickers
                </li>
              </ul>
            </div>
          </li>

          <li className="ml-10 text-slate-600 font-bold text-md relative flex items-center cursor-pointer">
            <span> Best Sellers</span>
            {!isScrolled && (
              <span className="bg-red-400 text-white text-xs px-1.5 py-1 rounded-sm absolute right-1 -top-6">
                Hot
                <div className="arrow-down"></div>
              </span>
            )}
          </li>
          <li className="ml-10 text-slate-600 font-bold text-md relative flex items-center cursor-pointer">
            <span>Newest Items</span>

            {!isScrolled && (
              <span className="bg-yellow-500 text-white text-xs px-1.5 py-1 rounded-sm absolute right-1 -top-6">
                New
                <div className="arrow-newdown"></div>
              </span>
            )}
          </li>
          <li className="ml-10 text-slate-600 font-bold text-md cursor-pointer">
            Bullet Jornal
          </li>
          <li className="ml-10 text-slate-600 font-bold text-md flex items-center cursor-pointer">
            Tsuki
            <Icon
              icon="entypo:moon"
              className="text-lg text-yellow-500 ml-1.5"
            />
          </li>
          <li className="ml-10 text-slate-600 font-bold text-md flex items-center cursor-pointer">
            Hinaki
            <Icon icon="bxs:tree" className="text-lg text-green-500 ml-1.5" />
          </li>
          <li className="ml-10 text-slate-600 font-bold text-md cursor-pointer">
            Seasonal Launch
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainNavbar;
