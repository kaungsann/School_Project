import { Suspense } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { useRoutes } from "react-router-dom";

import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";

import UnauthorizePage from "./pages/UnauthorizePage";
import HomePage from "./pages/HeroPage";
import PaymentPage from "./pages/PaymentPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

export default function App() {
  const routeConfig = [
    { path: "/", element: <HomePage /> },
    { path: "/401-unauthorized", element: <UnauthorizePage /> },
    { path: "/payment", element: <PaymentPage /> },
    { path: "/products", element: <ProductsPage /> },
    { path: "/product/detail/:id", element: <ProductDetailPage /> },
    {
      path: "/",
      element: <PrivateRoute roles={["user"]} />,
      children: [
        // { path: "profile", element: <ProfilePage /> },
      ],
    },
    {
      path: "/master",
      element: <PrivateRoute roles={["superuser"]} />,
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
