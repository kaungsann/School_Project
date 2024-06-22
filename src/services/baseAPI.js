import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"; //RTK QUERY
import { BASE_URL } from "../config/config";

const baseQueryWithReauth = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: async (headers, { getState }) => {
    const tokens = getState().auth.tokens;

    if (tokens) {
      headers.set("Authorization", `Bearer ${tokens}`);
    }
    return headers;
  },
});

export default baseQueryWithReauth;
