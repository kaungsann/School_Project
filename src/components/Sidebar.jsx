import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const { id } = useParams();

  const mode = useSelector((state) => state.mode);

  return (
    <>
      <nav className="hidden md:flex w-52 flex-col gap-3 p-3 pt-5  border-solid border-r-1 bg-white shadow-lg">
        <Link to="/tasks">
          <div
            className={`flex items-center cursor-pointer py-2 ${
              location.pathname === "/tasks" ||
              location.pathname === "/tasks/create" ||
              location.pathname === `/tasks/edit/${id}` ||
              location.pathname === `/tasks/delete/${id}` ||
              location.pathname === `/tasks/${id}`
                ? mode.isSelected
                  ? "bg-gray-200 text-slate-800"
                  : "text-gray-200 bg-slate-800"
                : "text-gray-500"
            }`}
          >
            <Icon icon="carbon:task" className="text-xl ml-6 " />
            <h3 className="font-semibold ml-4">Tasks</h3>
          </div>
        </Link>
        <Link to="/users">
          <div
            className={`flex items-center cursor-pointer py-2  ${
              location.pathname === "/users" ||
              location.pathname === "/users/create" ||
              location.pathname === `/users/edit/${id}` ||
              location.pathname === `/users/delete/${id}` ||
              location.pathname === `/users/${id}`
                ? mode.isSelected
                  ? "bg-gray-200 text-slate-800"
                  : "text-gray-200 bg-slate-800"
                : "text-gray-500"
            }`}
          >
            <Icon icon="ph:users-three-light" className="text-xl ml-6" />
            <h3 className="font-semibold ml-4">Users</h3>
          </div>
        </Link>
        <Link to="/projects">
          <div
            className={`flex items-center cursor-pointer py-2 ${
              location.pathname === "/projects" ||
              location.pathname === "/projects/create" ||
              location.pathname === `/projects/edit/${id}` ||
              location.pathname === `/projects/delete/${id}` ||
              location.pathname === `/projects/${id}`
                ? mode.isSelected
                  ? "bg-gray-200 text-slate-800"
                  : "text-gray-200 bg-slate-800"
                : "text-gray-500"
            }`}
          >
            <Icon icon="la:project-diagram" className="text-xl ml-6" />
            <h3 className="font-semibold ml-4">Projects</h3>
          </div>
        </Link>

        <Link to="/summary">
          <div
            className={`flex items-center cursor-pointer py-2 ${
              location.pathname === "/summary"
                ? mode.isSelected
                  ? "bg-gray-200 text-slate-800"
                  : "text-gray-200 bg-slate-800"
                : "text-gray-500"
            }`}
          >
            <Icon icon="fluent:tasks-app-28-regular" className="text-xl ml-6" />
            <h3 className="font-semibold ml-4">Summary</h3>
          </div>
        </Link>
      </nav>
    </>
  );
}
