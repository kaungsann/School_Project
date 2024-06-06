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

  return (
    <>
      <div className="bg-[#FFFFFF]">
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
          />
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
      <div className="py-4 sticky top-0 bg-[#FFFFFF]">
        {isScrolled && (
          <div className="absolute right-8">
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
          <li className="text-slate-600 font-bold text-md flex items-center cursor-pointer">
            <span>All Categories</span>
            <span>
              <Icon
                icon="bxs:hand-down"
                className="text-lg text-yellow-500 ml-1.5"
              />
            </span>

            <div className="hover-box hidden absolute bg-white shadow-lg p-4 top-full mt-2">
              {/* Content of the box goes here */}
              Additional Content
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
