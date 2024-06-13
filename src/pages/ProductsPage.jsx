import CardItems from "../components/CardItems";
import Footer from "../components/Footer";
import MainNavbar from "../components/MainNavbar";

function ProductsPage() {
  return (
    <>
      <MainNavbar />
      <div className="mb-8 mt-16">
        <CardItems />
      </div>
      <Footer />
    </>
  );
}

export default ProductsPage;
