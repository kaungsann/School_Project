import { Icon } from "@iconify/react";
import { Slider } from "@nextui-org/react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
function SelectedItemsBox({ handleClose, animationClass }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed w-full h-full top-0 z-40 bg-slate-800 opacity-70"></div>

      <div
        className={`fixed h-screen bg-white right-0 z-50 top-0 w-[450px] shadow-lg transition-transform duration-300  open-animation ${animationClass}`}
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
          <Slider
            aria-label="Player progress"
            color="primary"
            hideThumb={true}
            defaultValue={20}
            className="max-w-sm"
          />
          <p className="text-sm text-slate-900">
            If you add 3 items , you will get
            <span className="font-bold ml-2">Free Shipping</span>
          </p>
        </div>

        {/* <div className="flex flex-col items-center mt-40">
          <h4 className="mb-4 text-slate-800 font-bold text-xl">
            Your Cart is Empty!
          </h4>
          <p className="text-md text-slate-900 mb-4">
            Add yours favourite items to your cart
          </p>
          <button className="py-3 text-center bg-[#C98897] hover:opacity-75 text-white font-bold text-xl w-4/5 mx-auto rounded-md shadow-md">
            Shop Now
          </button>
        </div> */}

        <div className="absolute bottom-6 left-0 right-0 w-11/12 mx-auto">
          <div className="flex justify-between items-center p-4 border-t-2 border-slate-400">
            <span className="text-lg text-slate-600 font-semibold">
              Sub Total
            </span>
            <span className="text-lg text-slate-600 font-semibold">$23.98</span>
          </div>

          <button
            onClick={() => navigate("/payment")}
            className="py-3 w-full text-center bg-[#C98897] hover:opacity-75 text-white font-bold text-xl rounded-md shadow-md"
          >
            <div className="flex justify-center items-center ">
              <Icon
                icon="teenyicons:lock-solid"
                className="text-2xl text-slate-50"
              />
              <span className="text-xl font-bold font-sans text-slate-50 ml-4">
                CHECKOUT
              </span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

SelectedItemsBox.propTypes = {
  handleClose: PropTypes.func.isRequired,
  animationClass: PropTypes.string.isRequired,
};

export default SelectedItemsBox;
