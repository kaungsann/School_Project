import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./baseAPI";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (argu) => {
        const { categoryId } = argu;
        let queryString = "products";
        if (categoryId) {
          queryString += `/${categoryId}`;
        }
        return queryString;
      },
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: "Product", id })), "Product"]
          : ["Product"],
    }),
    getProductById: builder.query({
      query: (id) => `product/${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
