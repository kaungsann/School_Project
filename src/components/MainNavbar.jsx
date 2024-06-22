import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Spinner,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import "../App.css";
import { useEffect, useState } from "react";
import SelectedItemsBox from "../components/SelectedItemsBox";
import { useGetCategoriesQuery } from "../services/categoryApi";
import LoginForm from "./LoginForm";

const MainNavbar = ({ handleChangeCat, handleChangeFilter }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);
  const [seasonOpenBox, setSeasonOpenBox] = useState(null);
  const [showSelectedBox, setShowSelectedBox] = useState(false);
  const [boxAnimationClass, setBoxAnimationClass] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [modalSearchTerm, setModalSearchTerm] = useState("");

  const { data, isLoading } = useGetCategoriesQuery();

  const carts = useSelector((state) => state.cart);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    handleChangeFilter(searchTerm);
  };

  const handleModalSearchChange = (event) => {
    setModalSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    handleChangeFilter(modalSearchTerm);
    onClose(); // Close the modal after search
  };

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

  const handleCategoryClick = (categoryId) => {
    handleChangeCat(categoryId);
    setIsFocused(false);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="bg-[#FFFFFF] relative">
        <div className="flex justify-end">
          <Input
            type="search"
            placeholder="Search Product Name"
            variant="bordered"
            size="md"
            labelPlacement="outside"
            className="max-w-sm md:max-w-md lg:w-96 ml-3 rounded-sm"
            endContent={<Icon icon="mdi:search" className="text-xl" />}
            onFocus={() => setIsFocused(true)}
            // onBlur={() => setIsFocused(false)}
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Search Product Name"
          />
          {/* 
          <Dropdown>
            <DropdownTrigger>
              <Input
                type="search"
                placeholder="Search Product Name"
                variant="bordered"
                size="md"
                labelPlacement="outside"
                className="max-w-sm md:max-w-md lg:w-96 ml-3 rounded-sm"
                endContent={<Icon icon="mdi:search" className="text-xl" />}
                value={searchTerm}
                onChange={handleSearchChange}
                aria-label="Search Product Name"
              />
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              className="w-[650px] bg-red-500"
            >
              <div>
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete file
                </DropdownItem>
              </div>
              <div>
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete file
                </DropdownItem>
              </div>
            </DropdownMenu>
          </Dropdown> */}

          {isFocused && (
            <div className="absolute w-3/5 right-0 top-8 mt-2 rounded-md h-72 z-40 bg-white border border-gray-300 shadow-lg p-4">
              <div className="flex relative">
                <div className="w-72">
                  <h5 className="underline-offset-8 text-md font-semibold	decoration-solid decoration-4">
                    POPULAR SEARCHS
                  </h5>
                  <ul className="my-4">
                    {data?.slice(2, 7).map((cat) => (
                      <li
                        key={cat.id}
                        onClick={() => {
                          handleCategoryClick(cat.id);
                        }}
                        className="flex items-center px-3 py-2 mx-3 rounded-md hover:bg-slate-100 cursor-pointer"
                      >
                        <Icon icon="mdi:search" className="text-2xl" />
                        <span className="ml-2 font-bold text-[#9333ea]">
                          {cat.name}
                        </span>
                      </li>
                    ))}
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
                <span
                  onClick={() => setIsFocused(false)}
                  className="absolute top-0 right-3 cursor-pointer text-slate-600 text-2xl font-semibold"
                >
                  X
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between my-4 cursor-pointer">
          <img
            src="https://cdn.shopify.com/s/files/1/0505/4709/7785/files/Zugu_Horizontal_Logo_Black_r_Top.svg?v=1654110226"
            alt="logoImg"
            className="w-60 h-12 ml-16"
          />
          <div className="mr-12 flex items-center" onClick={handleOpenBox}>
            <Icon
              icon="ant-design:shopping-outlined"
              className="text-3xl text-slate-600 font-semibold"
            />

            <span>Shopping Cart</span>
            <span className="text-sm rounded-full px-3 py-1 bg-[#06539D] text-white font-semibold ml-2">
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

            <span className="rounded-full px-2 py-0.5 text-xs bg-[#06539D] text-white font-semibold absolute -top-2 -right-2">
              {carts?.length}
            </span>
          </div>
        )}

        <ul className="flex justify-center">
          <li className="text-md flex items-center cursor-pointer relative group">
            <div
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
                  <div className="absolute w-60 z-40  bg-white shadow-md -left-3">
                    <div
                      key="all"
                      onClick={() => handleCategoryClick(null)} // Passing null to reset the filter
                      className="text-md py-2 mx-3 border-b-2 border-slate-200 hover:text-[#06539D]"
                    >
                      Show All
                    </div>
                    {data?.map((cat) => (
                      <div
                        key={cat.id}
                        // onClick={() => handleCategoryClick(cat.id)}
                        onClick={() => {
                          handleCategoryClick(cat.id);
                        }}
                        className="text-md py-2 mx-3 border-b-2 border-slate-200 hover:text-[#06539D]"
                      >
                        {cat.name}
                      </div>
                    ))}

                    {isLoading && (
                      <span className="w-full my-4 flex justify-center">
                        <Spinner size="sm" />
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </li>

          <li
            className="ml-10 text-slate-600 font-bold text-md relative flex items-center cursor-pointer"
            onClick={() =>
              handleCategoryClick(
                data?.find((cat) => cat.name === "Best Sellers")?.id
              )
            }
          >
            <span className="underline-effect decoration-2">Best Sellers</span>
            {!isScrolled && (
              <span className="bg-[#2f3132] text-white text-xs px-1.5 py-1 rounded-sm absolute right-1 -top-6">
                Hot
                <div className="arrow-down"></div>
              </span>
            )}
          </li>

          <li
            onClick={() =>
              handleCategoryClick(
                data?.find((cat) => cat.name === "Newest Items")?.id
              )
            }
            className="ml-10 text-slate-600 font-bold text-md relative flex items-center cursor-pointer"
          >
            <span className="underline-effect decoration-2">Newest Items</span>

            {!isScrolled && (
              <span className="bg-[#06539D] text-white text-xs px-1.5 py-1 rounded-sm absolute right-1 -top-6">
                New
                <div className="arrow-newdown"></div>
              </span>
            )}
          </li>

          <li
            onClick={() =>
              handleCategoryClick(
                data?.find((cat) => cat.name === "Accessories")?.id
              )
            }
            className="ml-10 text-slate-600 font-bold text-md relative flex items-center"
          >
            <span className="underline-effect decoration-from-font cursor-pointer">
              Accessories
            </span>
          </li>

          <li
            className={`ml-10 flex items-center  ${
              seasonOpenBox ? "underline decoration-4" : ""
            }`}
            onMouseEnter={handleSeasonMenuOpen}
            onMouseLeave={handleSeasonMenuClose}
            aria-label="seasonal-promo"
          >
            <span className="text-slate-600 font-bold cursor-pointer text-md">
              Seasonal Promotions
            </span>

            {seasonOpenBox && (
              <div className="absolute right-0 z-40 bg-white shadow-md p-6 top-10 left-0">
                <section className="grid grid-cols-4 gap-8 w-full pt-4">
                  <div>
                    <ol>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Summer Sale ☀️
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Back to School 📚
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Holiday Deals 🎁
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        New Year Offers 🎉
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Spring Refresh 🌸
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Clearance Sale 🛒
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Tech Trends 🔌
                      </li>
                    </ol>
                  </div>
                  <div>
                    <ol>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Gaming Gear 🎮
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Smart Home 🏠
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Mobile Madness 📱
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Laptop Deals 💻
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Audio Essentials 🎧
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Wearable Tech ⌚
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Camera Sale 📷
                      </li>
                    </ol>
                  </div>
                  <div>
                    <ol>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Home Office 🖥️
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Fitness Tech 🏋️
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Travel Gadgets 🌍
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Eco-Friendly 🌿
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Kitchen Tech 🍴
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        VR/AR Experiences 🌐
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Networking 🛜
                      </li>
                    </ol>
                  </div>
                  <div>
                    <ol>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Outdoor Tech 🏞️
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Luxury Electronics 💎
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Robotics 🤖
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Drone Deals 🚁
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Entertainment Systems 🎬
                      </li>
                      <li className="mb-8 text-md font-sans font-semibold cursor-pointer hover:text-blue-600">
                        Car Tech 🚗
                      </li>
                    </ol>
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
                        value={modalSearchTerm}
                        onChange={handleModalSearchChange}
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onClick={handleSearch}>
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

MainNavbar.propTypes = {
  handleChangeCat: PropTypes.func.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

export default MainNavbar;
