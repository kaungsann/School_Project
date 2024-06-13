// import { Button } from "@nextui-org/react";
import MainNavbar from "../components/MainNavbar";
// import Sidebar from "../components/Sidebar";
// import { Pagination } from "@nextui-org/react";
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

      <Footer />
    </>
  );
}

export default HeroPage;
