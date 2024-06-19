import { useState } from "react";
import CardItems from "../components/CardItems";
import Footer from "../components/Footer";
import MainNavbar from "../components/MainNavbar";
import { useGetProductsQuery } from "../services/productApi";

function ProductsPage() {
  const [categoryId, setCategoryId] = useState(null);
  const [filterValue, setFilterValue] = useState("");

  const { data } = useGetProductsQuery();

  const handleChangeCategory = (catid) => {
    setCategoryId(catid);
  };

  const handleChangeFilter = (filter) => {
    setFilterValue(filter);
  };

  console.log("product data is a", data);
  return (
    <>
      <MainNavbar
        handleChangeCat={handleChangeCategory}
        handleChangeFilter={handleChangeFilter}
      />
      <div className="mb-8 mt-16">
        <CardItems categoryId={categoryId} filterValue={filterValue} />
      </div>
      <Footer />
    </>
  );
}

export default ProductsPage;
