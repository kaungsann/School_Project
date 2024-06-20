import { useNavigate, useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useGetCategoriesQuery } from "../services/categoryApi";
import PropTypes from "prop-types";
import {
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetProductByIdQuery,
} from "../services/productApi";
import { useEffect, useState } from "react";
import {
  Progress,
  Spinner,
  Input,
  Button,
  Textarea,
  Image,
} from "@nextui-org/react";
import CustomSelection from "./CustomSelection";
import PhotoUploadModal from "./PhotoUploadModal";

function ProductForm({ mode }) {
  const { id } = useParams();
  const [selectedPhotos, setPhotos] = useState([]);

  const { data: categoriesData, isLoading: isCatLoading } =
    useGetCategoriesQuery();
  const { data, isLoading } = useGetProductByIdQuery(id, { skip: !id });

  const [updateProduct, { isLoading: isUpdating, error: updateError }] =
    useUpdateProductMutation();
  const [deleteProduct, { isLoading: isDeleting, error: deleteError }] =
    useDeleteProductMutation();
  const [addProduct, { isLoading: isInserting, error: insertError }] =
    useAddProductMutation();

  const navigate = useNavigate();
  const {
    handleSubmit,
    reset,
    control,
    watch,
    setValue,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm();

  const readOnly = mode === "View" || mode === "Delete" || isSubmitting;

  const onSubmit = (data) => {
    console.log("pddata is", data);
    switch (mode) {
      case "Create": {
        addProduct(data)
          .unwrap()
          .then(() => {
            navigate("/adminpanel/products");
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      }
      case "Edit": {
        updateProduct(data)
          .unwrap()
          .then(() => {
            navigate("/adminpanel/products");
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      }
      case "Delete": {
        deleteProduct(data.id)
          .unwrap()
          .then(() => {
            navigate("/adminpanel/products");
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      }
    }
  };

  const selectedCategory = watch("category", data?.category);

  useEffect(() => {
    if (data) reset(data);
  }, [data, reset]);

  const onClickPhotoHandler = (newPhoto) => {
    setPhotos([...selectedPhotos, newPhoto]);
  };

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
                Product - {mode}
              </h1>
              <div className="flex">
                <Button
                  color="primary"
                  variant="bordered"
                  size="md"
                  radius="sm"
                  className="mr-2"
                  onClick={() => navigate("/adminpanel/products")}
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
                      className={`bg-blue-500 ml-4 rounded-md text-white h-10 z-50 px-6 py-1.5 font-semibold ${
                        !isDirty && "cursor-not-allowed bg-orange-300"
                      }`}
                    />
                  )}
                  {mode === "Edit" && (
                    <input
                      type="submit"
                      value="Update"
                      disabled={!isDirty || !isValid}
                      className={`bg-blue-500 ml-4 rounded-md text-white h-10 z-50 px-6 py-1.5 font-semibold ${
                        !isDirty && "cursor-not-allowed bg-orange-300"
                      }`}
                    />
                  )}
                  {mode === "Delete" && (
                    <input
                      type="submit"
                      value="Delete"
                      className={`bg-red-500 ml-4 rounded-md text-white h-10 z-50 px-6 py-1.5 font-semibold ${
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

          <div className="my-4">
            {selectedPhotos.length > 0 ? (
              selectedPhotos.map((photo, index) => (
                <Image
                  key={index}
                  radius="sm"
                  src={URL.createObjectURL(photo)}
                  alt={`Photo ${data?.name}`}
                  className="h-52 w-60"
                />
              ))
            ) : data?.image1 || data?.image2 ? (
              <>
                {data?.image1 && (
                  <Image
                    radius="sm"
                    src={data?.image1}
                    alt={`Photo ${data?.name}`}
                    className="h-52 w-60"
                  />
                )}
                {data?.image2 && (
                  <Image
                    radius="sm"
                    src={data?.image2}
                    alt={`Photo ${data?.name}`}
                    className="h-52 w-60"
                  />
                )}
              </>
            ) : (
              <div className="h-52 w-60 bg-gray-200 flex items-center justify-center">
                <h1>No photo</h1>
              </div>
            )}
            {!readOnly && (
              <PhotoUploadModal
                onActionConfirm={(photo) => onClickPhotoHandler(photo)}
              />
            )}
          </div>

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

            <CustomSelection
              options={categoriesData}
              onChange={(v) => setValue("category", v)}
              isLoading={isCatLoading}
              defaultValue={selectedCategory}
              disabled={readOnly}
              label="Category"
            />

            <Controller
              control={control}
              name="price"
              rules={{ required: true }}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <Input
                  isReadOnly={readOnly}
                  type="number"
                  label="Price"
                  value={value}
                  onChange={onChange}
                  radius="sm"
                  variant="bordered"
                  placeholder="Enter Price"
                  labelPlacement="outside"
                  className="max-w-xs"
                />
              )}
            />

            <Controller
              control={control}
              name="stock"
              rules={{ required: true }}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <Input
                  isReadOnly={readOnly}
                  type="number"
                  label="Stock"
                  value={value}
                  onChange={onChange}
                  radius="sm"
                  variant="bordered"
                  placeholder="Enter stock"
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

ProductForm.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default ProductForm;
