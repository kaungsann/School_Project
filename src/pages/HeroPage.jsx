import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import CountTimer from "../components/CountTimer";
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
      <CountTimer />
      <CardItems categoryId={categoryId} filterValue={filterValue} />
      <CardSlide />

      <img
        alt="Illustration of a person designing a website on a computer"
        className="w-full h-[600px] my-6"
        src="https://cdn.shopify.com/s/files/1/0070/7032/files/best-ecommerce-website-builders_34936283-c28e-41b7-89a9-2d94ce67b509.jpg?v=1691009868"
      ></img>
      <Blogs />

      <Footer />
    </>
  );
}

export default HeroPage;
