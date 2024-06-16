import { Icon } from "@iconify/react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Sidebar() {
  const { user } = useAuth();
  // const location = useLocation();

  // const { id } = useParams();

  // const mode = useSelector((state) => state.mode);

  return (
    <>
      <nav className="hidden md:flex w-52 flex-col gap-3 p-3 pt-2  border-solid border-r-1 bg-gray-100 shadow-lg">
        <h1 className="w-full font-bold text-xl mt-6 mb-3 text-[#2F3132] text-center">
          Admin {user}
        </h1>
        <Link to="/adminpanel/products">
          <div
            className="flex items-center cursor-pointer py-2"
            // className={`flex items-center cursor-pointer py-2 ${
            //   location.pathname === "/adminpanel/products" ||
            //   location.pathname === "/adminpanel/products/create" ||
            //   location.pathname === `/adminpanel/products/edit/${id}` ||
            //   location.pathname === `/adminpanel/products/delete/${id}` ||
            //   location.pathname === `/adminpanel/products/${id}`
            //     ? mode.isSelected
            //       ? "bg-gray-200 text-slate-800"
            //       : "text-gray-200 bg-slate-800"
            //     : "text-gray-500"
            // }`}
          >
            <Icon icon="carbon:task" className="text-xl ml-6 " />
            <h3 className="font-semibold ml-4">Products</h3>
          </div>
        </Link>
        <Link to="/users">
          <div
            className="flex items-center cursor-pointer py-2"
            // className={`flex items-center cursor-pointer py-2  ${
            //   location.pathname === "/adminpanel/users" ||
            //   location.pathname === "/adminpanel/users/create" ||
            //   location.pathname === `/adminpanel/users/edit/${id}` ||
            //   location.pathname === `/adminpanel/users/delete/${id}` ||
            //   location.pathname === `/adminpanel/users/${id}`
            //     ? mode.isSelected
            //       ? "bg-gray-200 text-slate-800"
            //       : "text-gray-200 bg-slate-800"
            //     : "text-gray-500"
            // }`}
          >
            <Icon icon="ph:users-three-light" className="text-xl ml-6" />
            <h3 className="font-semibold ml-4">Users</h3>
          </div>
        </Link>
        <Link to="/category">
          <div
            className="flex items-center cursor-pointer py-2"
            // className={`flex items-center cursor-pointer py-2 ${
            //   location.pathname === "/adminpanel/category" ||
            //   location.pathname === "/adminpanel/category/create" ||
            //   location.pathname === `/adminpanel/category/edit/${id}` ||
            //   location.pathname === `/adminpanel/category/delete/${id}` ||
            //   location.pathname === `/adminpanel/category/${id}`
            //     ? mode.isSelected
            //       ? "bg-gray-200 text-slate-800"
            //       : "text-gray-200 bg-slate-800"
            //     : "text-gray-500"
            // }`}
          >
            <Icon icon="la:project-diagram" className="text-xl ml-6" />
            <h3 className="font-semibold ml-4">Category</h3>
          </div>
        </Link>
        <Link to="/payment-transition">
          <div
            className="flex items-center cursor-pointer py-2"
            // className={`flex items-center cursor-pointer py-2 ${
            //   location.pathname === "/adminpanel/payment-transition"
            //     ? mode.isSelected
            //       ? "bg-gray-200 text-slate-800"
            //       : "text-gray-200 bg-slate-800"
            //     : "text-gray-500"
            // }`}
          >
            <Icon icon="fluent:tasks-app-28-regular" className="text-xl ml-6" />
            <h3 className="font-semibold ml-4">Payment Transition</h3>
          </div>
        </Link>
      </nav>
    </>
  );
}
