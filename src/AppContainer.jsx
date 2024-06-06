import PropTypes from "prop-types";
import MainNavbar from "./components/MainNavbar";
import Sidebar from "./components/Sidebar";

const AppContainer = ({ children }) => {
  return (
    <>
      <MainNavbar />
      <div className="flex h-screen" style={{ height: "calc(100vh - 64px)" }}>
        <Sidebar />
        <div className="flex-1 overflow-y-auto container mx-auto p-5">
          {children}
        </div>
      </div>
    </>
  );
};

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
