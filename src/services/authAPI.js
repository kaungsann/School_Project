import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./baseAPI";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: (refreshToken) => ({
        url: "auth/logout",
        method: "POST",
        body: { refreshToken },
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
