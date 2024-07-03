import { useGetProductsQuery } from "../services/productApi";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addCart } from "../features/cartSlice";
import { Spinner } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
//props.childern
function CardItems({ categoryId, filterValue }) {
  const { data, isLoading, error } = useGetProductsQuery({
    categoryId: categoryId,
  });

  const [filteredProducts, setFilteredProducts] = useState([]);

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleClickAddToCart = (item) => {
    toast.info(`${item.name} has been added to your cart!`);
    dispatch(addCart(item)); // Dispatch addCart action with the clicked item
  };

  useEffect(() => {
    // Filter products based on search term whenever it changes
    const filtered = data?.filter((product) =>
      product.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [filterValue, data]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 w-11/12	mx-auto relative ">
        {filteredProducts?.map((item, index) => (
          //[CART1,CART2,CART3].map((cat) =>  {
          //  <div key={cart.id}> sdgsjgkljg34069834906
          //   cart.name
          //</div>
          //  <div key={apple}>
          //   cart2.name
          //</div>
          //  <div>
          //   cart3.name
          //</div>
          //  } )
          <div key={index} className="mb-12 flex flex-col mx-3 cursor-pointer">
            <div onClick={() => navigateTo(`/product/detail/${item.id}`)}>
              <img
                alt={item.title}
                src={item.image1}
                className="w-full h-72 rounded-md hover:object-cover hover-image "
              />
              <h5 className="text-sm font-bold mt-1.5 text-slate-900 font-sans">
                {item.name}
              </h5>
              <p className="text-slate-600 my-2 font-semibold text-lg">
                {item.price} mmk
              </p>
            </div>

            <button
              onClick={() => handleClickAddToCart(item)}
              className="w-full py-2 bg-[#2F3132] hover:opacity-75 rounded-md shadow-md text-white font-sans font-bold"
            >
              Shop Now
            </button>
          </div>
        ))}
      </div>

      {isLoading && (
        <span className="w-4/5 mx-auto my-72 flex justify-center">
          <Spinner size="md" />
        </span>
      )}
      {error && (
        <span className="w-full my-4 flex justify-center text-red-600">
          {error?.error}
        </span>
      )}
    </>
  );
}

CardItems.propTypes = {
  categoryId: PropTypes.number,
  filterValue: PropTypes.string,
};

export default CardItems;
