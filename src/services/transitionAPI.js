import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./baseAPI";

export const transitionApi = createApi({
  reducerPath: "transitionApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Transition"],
  endpoints: (builder) => ({
    getTransitions: builder.query({
      query: () => "transactions/user/2",
      providesTags: ["Transition"],
    }),
    getTransitionById: builder.query({
      query: (id) => `transactions/user/${id}`,
      providesTags: (result, error, arg) => [
        { type: "Transition", id: arg.id },
      ],
    }),
    addTransition: builder.mutation({
      query: (payData) => ({
        url: "transactions",
        method: "POST",
        body: payData,
      }),
      invalidatesTags: ["Transition"],
    }),
  }),
});

export const {
  useGetTransitionsQuery,
  useGetTransitionByIdQuery,
  useAddTransitionMutation,
} = transitionApi;
