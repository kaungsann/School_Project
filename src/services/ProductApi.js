import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./baseAPI";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (argu = {}) => {
        // provide default value
        const { categoryId } = argu;
        let queryString = "products";
        if (categoryId) {
          queryString += `/category/${categoryId}`;
        }
        return queryString;
      },

      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Product", id })),
              { type: "Product", id: "LIST" },
            ]
          : [{ type: "Product", id: "LIST" }],
    }),
    addProduct: builder.mutation({
      query: (formData) => ({
        url: "products/save",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Product"],
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),

    updateProduct: builder.mutation({
      query: ({ id, formDataToSend }) => {
        // const { id, formDataToSend } = updates;
        // console.log("product updated form data is a", formDataToSend);
        return {
          url: `products/${id}`,
          method: "PATCH",
          body: formDataToSend,
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Product", id }],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
