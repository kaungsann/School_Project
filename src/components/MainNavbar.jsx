import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

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
import SelectedItemsBox from "../components/SelectedItemsBox";

import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";

const MainNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);
  const [seasonOpenBox, setSeasonOpenBox] = useState(null);
  const [showSelectedBox, setShowSelectedBox] = useState(false);
  const [boxAnimationClass, setBoxAnimationClass] = useState("");
  const carts = useSelector((state) => state.cart);

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

  // const handleCloseBox = () => {
  //   setShowSelectedBox(false);
  // };

  const handleCloseBox = () => {
    setBoxAnimationClass("close-animation"); // Add animation class
    setTimeout(() => {
      setShowSelectedBox(false);
      setBoxAnimationClass(""); // Reset animation class
    }, 300); // Match the timeout with the transition duration
  };

  const handleOpenBox = () => {
    setBoxAnimationClass("open-animation");
    setShowSelectedBox(true);
  };

  const handleSubMenuOpen = (subMenu) => {
    setSubMenuOpen(subMenu);
  };

  const handleSubMenuClose = () => {
    setSubMenuOpen(null);
  };

  const handleSeasonMenuOpen = (subMenu) => {
    setSeasonOpenBox(subMenu);
  };

  const handleSeasonMenuClose = () => {
    setSeasonOpenBox(null);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

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
            aria-label="Search Product Name"
          />

          {isFocused && (
            <div className="absolute w-3/5 right-0 top-8 mt-2 rounded-md h-72 z-40 bg-white border border-gray-300 shadow-lg p-4">
              <div className="flex">
                <div className="w-72">
                  <h5 className="underline-offset-8 text-md font-semibold	decoration-solid decoration-4">
                    POPULAR SEARCHS
                  </h5>
                  <ul className="my-4">
                    <li className="flex items-center px-3 py-2 mx-3 rounded-md hover:bg-slate-100 cursor-pointer">
                      <Icon icon="mdi:search" className="text-2xl" />
                      <span className="ml-2 font-bold text-[#9333ea]">
                        travel notebook
                      </span>
                    </li>
                    <li className="flex items-center px-3 py-2 mx-3 rounded-md hover:bg-slate-100 cursor-pointer">
                      <Icon icon="mdi:search" className="text-2xl" />
                      <span className="ml-2 font-bold text-[#9333ea]">
                        bullet Journal
                      </span>
                    </li>
                    <li className="flex items-center px-3 py-2 mx-3 rounded-md hover:bg-slate-100 cursor-pointer">
                      <Icon icon="mdi:search" className="text-2xl" />
                      <span className="ml-2 font-bold text-[#9333ea]">
                        Bullet Journal set
                      </span>
                    </li>
                    <li className="flex items-center px-3 py-2 mx-3 rounded-md hover:bg-slate-100 cursor-pointer">
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
          <div className="mr-12 flex items-center" onClick={handleOpenBox}>
            <Icon
              icon="ant-design:shopping-outlined"
              className="text-3xl text-slate-600 font-semibold"
            />

            <span>Shopping Cart</span>
            <span className="text-sm rounded-full px-2 py-1 bg-pink-100 font-semibold ml-2">
              {carts?.length}
            </span>
          </div>
        </div>
      </div>
      <div className="py-4 sticky top-0 bg-[#FFFFFF] z-30 flex justify-center">
        {isScrolled && (
          <div
            className="absolute right-8 cursor-pointer"
            // onClick={() => setShowSelectedBox(!showSelectedBox)}
            aria-label="search-box"
            onClick={handleOpenBox}
          >
            <Icon
              icon="ant-design:shopping-outlined"
              className="text-3xl text-slate-600 font-semibold"
            />

            <span className="text-sm rounded-full px-2 py-1 bg-pink-100 font-semibold absolute -top-3 -right-3">
              {carts?.length}
            </span>
          </div>
        )}

        <ul className="flex justify-center">
          <li className="text-md flex items-center cursor-pointer relative group">
            <li
              className="cursor-pointer relative"
              onMouseEnter={handleSubMenuOpen}
              onMouseLeave={handleSubMenuClose}
            >
              <div className="text-gray-700 hover:text-gray-900">
                <div className="flex items-center">
                  <span className="text-slate-600 font-bold underline-effect">
                    All Categories
                  </span>
                  <span>
                    <Icon
                      icon="bxs:hand-down"
                      className="text-lg text-yellow-500 ml-1.5"
                    />
                  </span>
                </div>

                {subMenuOpen && (
                  <ul className="absolute w-60 z-40 bg-white shadow-md -left-3">
                    <li className="text-md py-2 mx-3 border-b-2 border-slate-200 hover:text-pink-400">
                      Notebooks
                    </li>
                    <li className="text-md py-2 mx-3 border-b-2 border-slate-200 hover:text-pink-400">
                      Notebooks
                    </li>
                    <li className="text-md py-2 mx-3 border-b-2 border-slate-200 hover:text-pink-400">
                      Bullet Journals
                    </li>
                    <li className="text-md py-2 mx-3 border-b-2 border-slate-200 hover:text-pink-400">
                      Stamps
                    </li>
                    <li className="text-md py-2 mx-3 border-b-2 border-slate-200 hover:text-pink-400">
                      Washi Tape
                    </li>
                    <li className="text-md py-2 mx-3 border-b-2 border-slate-200 hover:text-pink-400">
                      Pencils Case
                    </li>
                    <li className="text-md py-2 mx-3 border-b-2 border-slate-200 hover:text-pink-400">
                      Bags
                    </li>
                    <li className="text-md py-2 mx-3 border-b-2 border-slate-200 hover:text-pink-400">
                      Pens
                    </li>
                    <li className="text-md py-2 mx-3 border-b-2 border-slate-200 hover:text-pink-400">
                      Stickers
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </li>

          <li className="ml-10 text-slate-600 font-bold text-md relative flex items-center cursor-pointer">
            <span className="underline-effect decoration-2"> Best Sellers</span>
            {!isScrolled && (
              <span className="bg-red-400 text-white text-xs px-1.5 py-1 rounded-sm absolute right-1 -top-6">
                Hot
                <div className="arrow-down"></div>
              </span>
            )}
          </li>

          <li className="ml-10 text-slate-600 font-bold text-md relative flex items-center cursor-pointer">
            <span className="underline-effect decoration-2">Newest Items</span>

            {!isScrolled && (
              <span className="bg-yellow-500 text-white text-xs px-1.5 py-1 rounded-sm absolute right-1 -top-6">
                New
                <div className="arrow-newdown"></div>
              </span>
            )}
          </li>

          <li className="ml-10 text-slate-600 font-bold text-md relative flex items-center">
            <span className="underline-effect decoration-from-font cursor-pointer">
              Bullet Journal
            </span>
          </li>

          <li className="ml-10 text-slate-600 font-bold text-md relative flex items-center cursor-pointer">
            <span className="underline-effect decoration-2">Tsuki</span>
            <Icon
              icon="entypo:moon"
              className="text-lg text-yellow-500 ml-1.5"
            />
          </li>

          <li className="ml-10 text-slate-600 font-bold text-md flex items-center relative cursor-pointer">
            <span className="underline-effect decoration-2">Hinaki</span>
            <Icon icon="bxs:tree" className="text-lg text-green-500 ml-1.5" />
          </li>

          <li
            className={`ml-10 flex items-center  ${
              seasonOpenBox ? "underline decoration-4" : ""
            }`}
            onMouseEnter={handleSeasonMenuOpen}
            onMouseLeave={handleSeasonMenuClose}
            aria-label="seasonal-lunch"
          >
            <span className="text-slate-600 font-bold cursor-pointer text-md">
              Seasonal Launch
            </span>

            {seasonOpenBox && (
              <div className="absolute right-0 z-40 bg-white shadow-md p-6 top-10 left-0">
                <section className="grid grid-cols-4 gap-8 w-full pt-4">
                  <div>
                    <ul>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Summer in Italy 🍋
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Otter Friends 🦦
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Sakura Days 🌸
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Neko Days 🐈
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Dried Flowers Collection 🥀
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Junk Journal 💐
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        s Lunar Mystery 🔮
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Maple Journey 🍁{" "}
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Sweet Ballet 🩰{" "}
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Midsummer Nights Dream 🌞{" "}
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Paris Collection 🇫🇷{" "}
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Sakura Breeze 🌸{" "}
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Love Lock 🗝{" "}
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Vintage Rose 🥀{" "}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Moonlit Alchemy 🔮{" "}
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Academia Collection 🖤{" "}
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Sights of Japan Collection 🗼{" "}
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Cottage Friends 🐻{" "}
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Moonflower Collection 🕊️{" "}
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Happy Day Collection 👧🏻{" "}
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Tea Party Collection 🍵{" "}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Cloud Dreamland ☁️{" "}
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Ocean Collection 🌊{" "}
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Four Seasons Collection 🐰{" "}
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Maple Dreams Collection 🍁{" "}
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Moonlit Spells 🔮{" "}
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-pink-300">
                        Floral Collection 💐{" "}
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            )}
          </li>
        </ul>
        {isScrolled && (
          <>
            <button
              onClick={() => onOpen()}
              className="flex justify-end absolute right-16"
            >
              <Icon
                icon="mdi:search"
                className="text-3xl text-slate-600  cursor-pointer font-semibold mx-8"
              />
            </button>

            <Modal size="md" isOpen={isOpen} onClose={onClose}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader
                      className="flex flex-col gap-1"
                      aria-label="filter-product"
                    >
                      Filter By Products
                    </ModalHeader>
                    <ModalBody>
                      <Input
                        type="text"
                        variant="bordered"
                        placeholder="search product name ..."
                        aria-label="search-product"
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Search
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>
        )}

        <div className="absolute right-40">
          <LoginForm />
        </div>
      </div>
      {showSelectedBox && (
        <SelectedItemsBox
          handleClose={handleCloseBox}
          animationClass={boxAnimationClass}
        />
      )}
    </>
  );
};

export default MainNavbar;
