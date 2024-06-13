import { Icon } from "@iconify/react";
import { Progress } from "@nextui-org/react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { calculateSubtotal } from "../utils/cartCountPrice";
import { removeCart, updateCartQuantity } from "../features/cartSlice";
function SelectedItemsBox({ handleClose, animationClass }) {
  const carts = useSelector((state) => state.cart);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log("select carts is a", carts);

  const subtotal = calculateSubtotal(carts);

  const navigate = useNavigate();

  const handleIncreaseQuantity = (item) => {
    dispatch(updateCartQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateCartQuantity({ id: item.id, quantity: item.quantity - 1 })
      );
    } else {
      dispatch(removeCart(item.id));
    }
  };

  const requiredItemsForFreeShipping = 3;

  // Calculate progress value
  const progressValue = (carts?.length / requiredItemsForFreeShipping) * 100;
  return (
    <>
      <div className="fixed w-full h-full top-0 z-40 bg-slate-800 opacity-70"></div>

      <div
        className={`fixed h-screen bg-white right-0 z-50 top-0 w-[500px] shadow-lg transition-transform duration-300  open-animation ${animationClass}`}
      >
        <div className="p-4 flex justify-between items-center border-b-1 border-slate-200">
          <h2 className="text-2xl font-sans font-bold text-slate-800">
            My Cart
          </h2>
          <Icon
            icon="bitcoin-icons:cross-filled"
            className="text-slate-800 text-2xl cursor-pointer hover:text-slate-500"
            onClick={handleClose}
          />
        </div>

        <div className="flex flex-col justify-center items-center my-3">
          <Progress
            aria-label="Loading..."
            color="warning"
            value={progressValue}
            size="md"
            className="max-w-md"
          />

          {carts?.length > 2 ? (
            <p className="text-sm font-sans font-semibold text-slate-700 mt-2">
              🎉 Congrats! You have unlocked FREE SHIPPING!
            </p>
          ) : (
            <p className="text-sm text-slate-900 mt-2">
              If you add 3 items , you will get
              <span className="font-bold ml-2">Free Shipping</span>
            </p>
          )}
        </div>

        <div className="w-full h-[450px] flex flex-col overflow-y-scroll">
          {carts.map((cart) => (
            <div
              key={cart.id}
              className="flex justify-between items-center p-4 border-b-1"
            >
              <img src={cart.image1} alt={cart.name} className="w-24 h-24" />
              <div className="w-3/5">
                <h2 className="text-slate-800 text-sm font-semibold">
                  {cart.name}
                </h2>
                <div className="flex items-center mt-2 border-y-1 w-28">
                  <div
                    onClick={() => handleIncreaseQuantity(cart)}
                    className="border-x-1 hover:bg-slate-200 cursor-pointer w-12 h-6 flex justify-center items-center"
                  >
                    <Icon
                      icon="ic:outline-plus"
                      className="text-slate-500 text-lg font-bold text-center "
                    />
                  </div>

                  <div className="border-r-1 w-8 h-6 flex justify-center items-center">
                    <span className="text-slate-500 text-sm font-bold text-center px-8">
                      {cart?.quantity}
                    </span>
                  </div>

                  <div
                    onClick={() => handleDecreaseQuantity(cart)}
                    className="border-l-1 hover:bg-slate-200 cursor-pointer w-12 h-6 flex justify-center items-center"
                  >
                    <Icon
                      icon="ic:round-minus"
                      className="text-slate-500 text-lg font-bold text-center"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <Icon
                  icon="mdi:trash-outline"
                  className="text-xl text-slate-500 cursor-pointer hover:text-slate-700"
                  onClick={() => dispatch(removeCart(cart.id))}
                />
                <p className="mt-5 text-slate-500 text-sm font-semibold">
                  {cart.price * cart?.quantity}
                </p>
              </div>
            </div>
          ))}
          {carts?.length === 0 && (
            <div className="flex flex-col items-center mt-40">
              <h4 className="mb-4 text-slate-800 font-bold text-xl">
                Your Cart is Empty!
              </h4>
              <p className="text-md text-slate-900 mb-4">
                Add yours favourite items to your cart
              </p>
              <button
                onClick={() => navigate("/products")}
                className="py-3 text-center bg-[#C98897] hover:opacity-75 text-white font-bold text-xl w-4/5 mx-auto rounded-md shadow-md"
              >
                Shop Now
              </button>
            </div>
          )}
        </div>

        {carts?.length > 0 && (
          <div className="absolute bottom-6 left-0 right-0 w-11/12 mx-auto">
            <div className="flex justify-between items-center p-4 border-t-2 border-slate-400">
              <span className="text-lg text-slate-600 font-semibold">
                Sub Total
              </span>
              <span className="text-lg text-slate-600 font-semibold">
                $ {subtotal.toFixed(2)}
              </span>
            </div>

            <button
              onClick={() => navigate("/payment")}
              className="py-3 w-full text-center bg-[#2F3132] hover:opacity-75 text-white font-bold text-xl rounded-md shadow-md"
            >
              <div className="flex justify-center items-center ">
                {!isLoggedIn && (
                  <Icon
                    icon="teenyicons:lock-solid"
                    className="text-2xl text-slate-50"
                  />
                )}

                <span className="text-xl font-bold font-sans text-slate-50 ml-4">
                  CHECKOUT
                </span>
              </div>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

SelectedItemsBox.propTypes = {
  handleClose: PropTypes.func.isRequired,
  animationClass: PropTypes.string.isRequired,
};

export default SelectedItemsBox;
