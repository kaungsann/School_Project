import { useNavigate, useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import PropTypes from "prop-types";
import {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoryByIdQuery,
  useUpdateCategoryMutation,
} from "../services/categoryApi";
import { useEffect } from "react";
import { Progress, Spinner, Input, Button, Textarea } from "@nextui-org/react";

function CategoryForm({ mode }) {
  const { id } = useParams();

  const { data, isLoading } = useGetCategoryByIdQuery(id, {
    skip: !id,
  });

  const [updateCategory, { isLoading: isUpdating, error: updateError }] =
    useUpdateCategoryMutation();
  const [deleteCategory, { isLoading: isDeleting, error: deleteError }] =
    useDeleteCategoryMutation();
  const [addCategory, { isLoading: isInserting, error: insertError }] =
    useAddCategoryMutation();

  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm();

  const readOnly = mode === "View" || mode === "Delete" || isSubmitting;

  const onSubmit = (data) => {
    switch (mode) {
      case "Create": {
        addCategory(data)
          .unwrap()
          .then(() => {
            navigate("/adminpanel/categories");
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      }
      case "Edit": {
        updateCategory(data)
          .unwrap()
          .then(() => {
            navigate("/adminpanel/categories");
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      }
      case "Delete": {
        deleteCategory(data.id)
          .unwrap()
          .then(() => {
            navigate("/adminpanel/categories");
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      }
    }
  };

  useEffect(() => {
    if (data) reset(data);
  }, [data, reset]);

  return (
    <>
      <div>
        {(isLoading || isUpdating || isDeleting || isInserting) && (
          <Spinner
            size="lg"
            className="flex justify-center items-center w-full h-screen absolute top-0 bottom-0 right-0 left-0"
          />
        )}
        {[updateError, deleteError, insertError].map(
          (error, index) =>
            error &&
            error.data && (
              <p key={`${error.data.message}-${index}`} className="text-danger">
                {error.data?.message}
              </p>
            )
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex justify-between items-center w-full">
              <h1 className="text-xl sm:text-md font-bold text-slate-600">
                User -{mode}
              </h1>
              <div className="flex">
                <Button
                  color="primary"
                  variant="bordered"
                  size="md"
                  radius="sm"
                  className="mr-2"
                  onClick={() => navigate("/adminpanel/categories")}
                >
                  Back
                </Button>

                <div>
                  {mode === "Create" && (
                    <input
                      type="submit"
                      value="Add"
                      disabled={
                        !isDirty ||
                        !isValid ||
                        isDeleting ||
                        isInserting ||
                        isUpdating
                      }
                      className={`bg-blue-500 ml-4 rounded-md text-white h-10 z-50 px-6 py-1.5 font-semibold  ${
                        !isDirty && "cursor-not-allowed bg-orange-300"
                      }`}
                    />
                  )}
                  {mode === "Edit" && (
                    <input
                      type="submit"
                      value="Update"
                      disabled={!isDirty || !isValid}
                      className={`bg-blue-500 ml-4 rounded-md text-white h-10 z-50 px-6 py-1.5 font-semibold  ${
                        !isDirty && "cursor-not-allowed bg-orange-300"
                      }`}
                    />
                  )}
                  {mode === "Delete" && (
                    <input
                      type="submit"
                      value="Delete"
                      className={`bg-red-500 ml-4 rounded-md text-white h-10 z-50 px-6 py-1.5 font-semibold  ${
                        !isDirty && "cursor-not-allowed bg-orange-300"
                      }`}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            {updateError && (
              <p className="text-danger font-bold">{updateError.error}</p>
            )}
            {deleteError && (
              <p className="text-danger font-bold">{deleteError.error}</p>
            )}
            {insertError && (
              <p className="text-danger font-bold">{insertError.error}</p>
            )}
          </div>

          {(isInserting || isUpdating || isDeleting) && (
            <Progress
              size="sm"
              isIndeterminate
              aria-label="Loading..."
              className="my-2"
            />
          )}

          <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-3 mb-6 w-3/4">
            <Controller
              control={control}
              name="name"
              rules={{ required: true }}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <Input
                  isReadOnly={readOnly}
                  type="text"
                  label="Name"
                  value={value}
                  radius="sm"
                  variant="bordered"
                  placeholder="Enter name"
                  onChange={onChange}
                  labelPlacement="outside"
                  className="max-w-xs"
                />
              )}
            />

            <Controller
              control={control}
              name="description"
              rules={{ required: true }}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <Textarea
                  label="Description"
                  variant="bordered"
                  placeholder="Enter your description"
                  disableAnimation
                  disableAutosize
                  value={value}
                  onChange={onChange}
                  labelPlacement="outside"
                  classNames={{
                    base: "max-w-xs",
                    input: "resize-y min-h-[40px]",
                  }}
                />
              )}
            />
          </div>
        </form>
      </div>
    </>
  );
}

CategoryForm.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default CategoryForm;
