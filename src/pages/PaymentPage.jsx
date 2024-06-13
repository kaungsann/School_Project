import { useNavigate } from "react-router-dom";
import logo from "../assets/images/notebook.png";
import LoginForm from "../components/LoginForm";
import PaymentForm from "../components/PaymentForm";
import { Icon } from "@iconify/react";

function PaymentPage() {
  const navigateTo = useNavigate();
  return (
    <>
      <div>
        <div className="py-3 text-center w-full border-2 bg-white relative flex justify-center">
          <img src={logo} alt="logo" className="w-80 h-8" />

          <span
            onClick={() => navigateTo("/products")}
            className="absolute right-20  cursor-pointer"
          >
            <Icon
              icon="ant-design:shopping-outlined"
              className="text-3xl text-pink-300 mt-1"
            />
          </span>

          <div className="absolute right-28 mt-1 border-r-2">
            <LoginForm />
          </div>
        </div>
        <div>
          <PaymentForm />
        </div>
      </div>
    </>
  );
}

export default PaymentPage;
