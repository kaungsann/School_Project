import LoginForm from "./LoginForm";
import { useAuth } from "../hooks/useAuth";

function AdminNavBar() {
  const { user } = useAuth();
  return (
    <>
      <div className="bg-gray-100 py-3 shadow-md flex justify-between items-center">
        <div className="">
          <img
            src="https://cdn.shopify.com/s/files/1/0505/4709/7785/files/Zugu_Horizontal_Logo_Black_r_Top.svg?v=1654110226"
            alt="logoImg"
            className="w-60 h-10 ml-106"
          />
        </div>
        <div className="mr-20 flex items-center">
          <LoginForm />
          <h1 className="font-bold text-lg text-[#2F3132] ml-2">{user}</h1>
        </div>
      </div>
    </>
  );
}

export default AdminNavBar;
