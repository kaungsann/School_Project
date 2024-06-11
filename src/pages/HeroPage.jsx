// import { Button } from "@nextui-org/react";
import MainNavbar from "../components/MainNavbar";
// import Sidebar from "../components/Sidebar";
// import { Pagination } from "@nextui-org/react";
import { Icon } from "@iconify/react";
// import CategoryImages from "../components/CategorySlideImage/CategoryImages";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import CountTimer from "../components/CountTimer";
import CardItems from "../components/CardItems";
import currentMonth from "../assets/images/june.jpg";
import Blogs from "../components/Blogs";
import CardSlide from "../components/CardSlide";

function HeroPage() {
  return (
    <>
      <MainNavbar />
      <HeroImage />
      <CountTimer />
      <CardItems />
      <CardSlide />
      <img src={currentMonth} alt="month" className="w-11/12 mx-auto my-6" />
      <Blogs />
      <div className="flex justify-evenly my-12">
        <div className="flex items-center cursor-pointer">
          <Icon
            icon="vaadin:truck"
            style={{ color: "black" }}
            className="text-xl"
          />
          <span className="ml-2 text-xs font-semibold hover:underline-offset-8 hover:underline decoration-solid underline-effect">
            Free World Wide Shipping
          </span>
        </div>
        <div className="flex items-center cursor-pointer">
          <Icon
            icon="streamline:arrow-round-right"
            style={{ color: "black" }}
            className="text-xl"
          />

          <span className="ml-2 text-xs font-semibold hover:underline-offset-8 hover:underline decoration-solid underline-effect">
            Full 30-day Return Policy
          </span>
        </div>
        <div className="flex items-center cursor-pointer">
          <Icon
            icon="fa:users"
            style={{ color: "black" }}
            className="text-xl"
          />
          <span className="ml-2 text-xs font-semibold hover:underline-offset-8 hover:underline decoration-solid underline-effect">
            Join 1000 stationery-addicts
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HeroPage;
