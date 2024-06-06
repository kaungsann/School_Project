import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, removeCredentials } from "../features/authSlice";
import { BASE_URL } from "../config/config";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: async (headers, { getState }) => {
    const tokens = getState().auth.tokens;
    if (tokens) {
      const { access } = tokens;
      headers.set("Authorization", `Bearer ${access.token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const refreshToken = api.getState().auth.tokens?.refresh.token;

  const refreshArgs = {
    url: "auth/refresh-tokens",
    method: "POST",
    body: { refreshToken },
  };

  const logoutArgs = {
    url: "auth/logout",
    method: "POST",
    body: { refreshToken },
  };

  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // try to get new tokens
    const refreshResult = await baseQuery(refreshArgs, api, extraOptions);
    if (refreshResult.data) {
      // store the new tokens
      api.dispatch(setCredentials(refreshResult.data));
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      // couldn't get new tokens, logout
      await baseQuery(logoutArgs, api, extraOptions);
      api.dispatch(removeCredentials());
    }
  }
  return result;
};

export default baseQueryWithReauth;
