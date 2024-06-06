import { Suspense } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { useRoutes } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";

import UnauthorizePage from "./pages/UnauthorizePage";
import HomePage from "./pages/HeroPage";

export default function App() {
  const routeConfig = [
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginForm /> },
    { path: "/register", element: <RegisterForm /> },
    { path: "/401-unauthorized", element: <UnauthorizePage /> },
    {
      path: "/",
      element: <PrivateRoute roles={["admin", "superadmin"]} />,
      children: [
        // { path: "profile", element: <ProfilePage /> },
      ],
    },
    {
      path: "/master",
      element: <PrivateRoute roles={["superadmin"]} />,
      children: [
        // { path: "projects/create", element: <ProjectForm mode="Create" /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ];

  const element = useRoutes(routeConfig);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
      </PersistGate>
    </Provider>
  );
}
