import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import PromoteText from "../components/PromoteText";
import CardItems from "../components/CardItems";
import Blogs from "../components/Blogs";
import CardSlide from "../components/CardSlide";
import { useState } from "react";

function HeroPage() {
  const [categoryId, setCategoryId] = useState(null);
  const [filterValue, setFilterValue] = useState("");

  const handleChangeCategory = (catid) => {
    console.log("catid ", catid);
    setCategoryId(catid);
  };

  const handleChangeFilter = (filter) => {
    setFilterValue(filter);
  };

  return (
    <>
      <MainNavbar
        handleChangeCat={handleChangeCategory}
        handleChangeFilter={handleChangeFilter}
      />
      <HeroImage />
      <PromoteText />
      <CardItems categoryId={categoryId} filterValue={filterValue} />
      <CardSlide />

      <div className="bg-[#F7F2F0] h-96 w-full p-8 flex flex-col my-8 justify-center items-center">
        <h4 className="text-[#51200B] text-5xl font-sans font-semibold w-3/4 text-center">
          Get tailored discounts, services, and tools for your business stage.
        </h4>
        <p className="text-slate-600 text-2xl my-6 w-3/4 text-center">
          Grow with curated benefits offered by the free zugo.com Membership,
          whether you are a small business needing the essentials to start
          sourcing or a well-established enterprise looking for tools and
          solutions for more complex orders.
        </p>
        <span className="text-slate-800 text-lg font-semibold underline cursor-pointer">
          Learn More
        </span>
      </div>
      <Blogs />

      <Footer />
    </>
  );
}

export default HeroPage;
