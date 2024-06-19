import { Spinner } from "@nextui-org/react";
import { useGetCategoriesQuery } from "../services/categoryApi";

import CategoryList from "../components/CategoryList";

function AdminCategoryPage() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetCategoriesQuery();

  return (
    <>
      <div className="flex justify-between"></div>
      {error?.data?.message && <p className="text-red-500">Error: {error}</p>}
      {isError && (
        <p className="text-red-500">
          Error:
          {error?.error || error?.error || "An unexpected error occurred"}
        </p>
      )}
      {isError && <p>Error fetching Category</p>}

      {isLoading && (
        <Spinner
          size="lg"
          className="flex justify-center items-center h-screen"
        />
      )}

      {isSuccess && <CategoryList categories={data} />}
    </>
  );
}

export default AdminCategoryPage;
