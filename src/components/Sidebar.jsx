import { Icon } from "@iconify/react";
import { Link, useParams } from "react-router-dom";

export default function Sidebar() {
  // const location = useLocation();

  const { id } = useParams();

  return (
    <>
      <nav className="hidden md:flex w-52 pt-8 flex-col gap-3 p-3 border-solid border-r-1 bg-gray-100 shadow-lg">
        <Link to="/adminpanel/products">
          <div
            className={`flex items-center cursor-pointer py-2 hover:bg-[#414649] hover:text-white ${
              location.pathname === "/adminpanel/products" ||
              location.pathname === `/adminpanel/products/view/${id}` ||
              location.pathname === "/adminpanel/products/create" ||
              location.pathname === `/adminpanel/products/edit/${id}` ||
              location.pathname === `/adminpanel/products/delete/${id}` ||
              location.pathname === `/adminpanel/products/${id}`
                ? "text-white bg-[#414649]" // active class
                : "text-gray-500" // inactive class
            }`}
          >
            <Icon
              icon="fluent-mdl2:product-variant"
              className="text-xl ml-6 "
            />
            <h3 className="font-semibold ml-4">Products</h3>
          </div>
        </Link>
        <Link to="/adminpanel/categories">
          <div
            className={`flex items-center cursor-pointer py-2 hover:bg-[#414649] hover:text-white ${
              location.pathname === "/adminpanel/categories" ||
              location.pathname === `/adminpanel/category/view/${id}` ||
              location.pathname === "/adminpanel/category/create" ||
              location.pathname === `/adminpanel/category/edit/${id}` ||
              location.pathname === `/adminpanel/category/delete/${id}` ||
              location.pathname === `/adminpanel/category/${id}`
                ? "text-white bg-[#414649]" // active class
                : "text-gray-500" // inactive class
            }`}
          >
            <Icon icon="la:project-diagram" className="text-xl ml-6" />
            <h3 className="font-semibold ml-4">Category</h3>
          </div>
        </Link>
        <Link to="/adminpanel/users">
          <div
            className={`flex items-center cursor-pointer py-2 hover:bg-[#414649] hover:text-white ${
              location.pathname === "/adminpanel/users" ||
              location.pathname === "/adminpanel/user/create" ||
              location.pathname === `/adminpanel/user/edit/${id}` ||
              location.pathname === `/adminpanel/user/delete/${id}` ||
              location.pathname === `/adminpanel/user/${id}`
                ? "text-white bg-[#414649]" // active class
                : "text-gray-500" // inactive class
            }`}
          >
            <Icon icon="ph:users-three-light" className="text-xl ml-6" />
            <h3 className="font-semibold ml-4">Users</h3>
          </div>
        </Link>

        <Link to="/adminpanel/transitions">
          <div
            className={`flex items-center cursor-pointer py-2 hover:bg-[#414649] hover:text-white ${
              location.pathname === "/adminpanel/transitions" ||
              location.pathname === `/adminpanel/transition/view/${id}`
                ? "text-white bg-[#414649]" // active class
                : "text-gray-500" // inactive class
            }`}
          >
            <Icon icon="fluent:tasks-app-28-regular" className="text-xl ml-6" />
            <h3 className="font-semibold ml-4">Transition</h3>
          </div>
        </Link>
      </nav>
    </>
  );
}
