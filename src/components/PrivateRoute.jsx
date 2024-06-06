import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import AppContainer from "../AppContainer";

const PrivateRoute = ({ roles }) => {
  const { isLoggedIn, user } = useAuth();
  const currentRole = user?.role;

  return isLoggedIn ? (
    roles && !roles.includes(currentRole) ? (
      <Navigate to="/401-unauthorized" replace />
    ) : (
      <AppContainer>
        <Outlet />
      </AppContainer>
    )
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  roles: PropTypes.array.isRequired,
};
