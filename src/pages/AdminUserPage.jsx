import { Spinner } from "@nextui-org/react";
import { useGetUsersQuery } from "../services/userApi";

import UserList from "../components/UserList";

function AdminUserPage() {
  const { data, isLoading, isSuccess, isError, error } = useGetUsersQuery();

  console.log("user all is a", data);

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
      {isError && <p>Error fetching Users</p>}

      {isLoading && (
        <Spinner
          size="lg"
          className="flex justify-center items-center h-screen"
        />
      )}

      {isSuccess && <UserList users={data} />}
    </>
  );
}

export default AdminUserPage;
