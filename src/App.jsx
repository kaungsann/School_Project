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
import AdminProductPage from "./pages/AdminProductPage";
import ProductForm from "./components/ProductForm";
import AdminCategoryPage from "./pages/AdminCategoryPage";
import CategoryForm from "./components/CategoryForm";
import AdminUserPage from "./pages/AdminUserPage";
import UserForm from "./components/UserForm";

export default function App() {
  const routeConfig = [
    //SIMPLE USER / GUESS USER
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
      path: "/adminpanel",
      element: <PrivateRoute roles={["superuser"]} />,
      children: [
        {
          path: "products",
          element: <AdminProductPage />,
        },
        { path: "categories", element: <AdminCategoryPage /> },
        { path: "users", element: <AdminUserPage /> },

        { path: "products/view/:id", element: <ProductForm mode="View" /> },
        { path: "products/create", element: <ProductForm mode="Create" /> },
        { path: "products/edit/:id", element: <ProductForm mode="Edit" /> },
        { path: "products/delete/:id", element: <ProductForm mode="Delete" /> },

        { path: "category/view/:id", element: <CategoryForm mode="View" /> },
        { path: "category/create", element: <CategoryForm mode="Create" /> },
        { path: "category/edit/:id", element: <CategoryForm mode="Edit" /> },
        {
          path: "category/delete/:id",
          element: <CategoryForm mode="Delete" />,
        },

        { path: "user/view/:id", element: <UserForm mode="View" /> },
        { path: "user/create", element: <UserForm mode="Create" /> },
        { path: "user/edit/:id", element: <UserForm mode="Edit" /> },
        {
          path: "user/delete/:id",
          element: <UserForm mode="Delete" />,
        },
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
