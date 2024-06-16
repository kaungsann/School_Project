import { useState } from "react";
import CardItems from "../components/CardItems";
import Footer from "../components/Footer";
import MainNavbar from "../components/MainNavbar";

function ProductsPage() {
  const [categoryId, setCategoryId] = useState(null);

  const handleChangeCategory = (catid) => {
    console.log("catid ", catid);
    setCategoryId(catid);
  };
  return (
    <>
      <MainNavbar handleChangeCat={handleChangeCategory} />
      <div className="mb-8 mt-16">
        <CardItems categoryId={categoryId} />
      </div>
      <Footer />
    </>
  );
}

export default ProductsPage;
