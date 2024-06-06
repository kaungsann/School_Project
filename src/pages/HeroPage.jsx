// import { Button } from "@nextui-org/react";
import MainNavbar from "../components/MainNavbar";
// import Sidebar from "../components/Sidebar";
// import { Pagination } from "@nextui-org/react";
// import { Icon } from "@iconify/react";
// import CategoryImages from "../components/CategorySlideImage/CategoryImages";

import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import CountTimer from "../components/CountTimer";

function HeroPage() {
  return (
    <>
      <MainNavbar />
      <div className="">
        {/* <Sidebar /> */}

        <HeroImage />
        <CountTimer />
        <Footer />
      </div>
    </>
  );
}

export default HeroPage;
