import { Spinner } from "@nextui-org/react";
import { useGetProductsQuery } from "../services/productApi";

import ProductList from "../components/ProductList";

function AdminProductPage() {
  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery();
  console.log("product  is  a", data);
  return (
    <>
      <div className="flex justify-between"></div>
      {error?.data?.message && <p className="text-red-500">Error: {error}</p>}
      {isError && (
        <p className="text-red-500">
          Error:
          {error?.data?.message ||
            error?.error ||
            "An unexpected error occurred"}
        </p>
      )}
      {isError && <p>Error fetching Products</p>}

      {isLoading && (
        <Spinner
          size="lg"
          className="flex justify-center items-center h-screen"
        />
      )}

      {isSuccess && <ProductList products={data} />}
    </>
  );
}

export default AdminProductPage;
