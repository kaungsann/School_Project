import { useNavigate, useParams } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
import { useGetProductByIdQuery } from "../services/productApi";
import { Spinner } from "@nextui-org/react";
import Footer from "../components/Footer";
import { addCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

function ProductDetailPage() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { data, isLoading } = useGetProductByIdQuery(id, {
    skip: !id,
  });

  console.log("product detial is a", data);
  return (
    <>
      <MainNavbar />
      <div className="mt-12 relative">
        {data && (
          <div className="flex">
            <div className="w-3/5">
              <img
                src={data?.image1}
                alt={data?.name}
                className="w-4/5 mx-auto h-[600px]"
              />
            </div>
            <div className="w-96">
              <h4 className="text-2xl font-sans font-semibold text-slate-700">
                {data?.name}
              </h4>
              <p className="text-lg text-slate-600 text-left my-4 whitespace-normal">
                {data?.description}
              </p>
              <p className="text-2xl text-slate-900 font-semibold text-left whitespace-normal">
                {data?.price} MMK
              </p>

              <button
                onClick={() => dispatch(addCart(data))}
                className="bg-[#2F3132] hover:opacity-75 font-bold rounded-md shadow-md font-sans mt-6 w-full py-3 text-center text-white"
              >
                Add Cart
              </button>

              <button
                onClick={() => navigateTo("/products")}
                className="border-2 border-slate-900 hover:bg-[#2F3132] hover:text-white font-bold rounded-md shadow-md font-sans my-6 w-full py-3 text-center text-slate-900"
              >
                Back
              </button>

              <img
                src={data?.image2}
                alt={data?.name}
                className="w-full my-3 h-60"
              />
            </div>
          </div>
        )}

        {isLoading && (
          <span className="w-4/5 mx-auto  flex justify-center">
            <Spinner size="md" />
          </span>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ProductDetailPage;
