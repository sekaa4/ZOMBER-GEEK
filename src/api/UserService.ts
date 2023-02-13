import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import User from "../models/User.type";
import URL from "../models/URL";
import ConstantsString from "../models/ConstantsString";
import Methods from "../models/Methods";

const userAPI = createApi({
  reducerPath: `${ConstantsString.USER_API}`,
  baseQuery: fetchBaseQuery({ baseUrl: `${URL.BASE_URL}` }),
  tagTypes: [ConstantsString.USER],
  endpoints: (build) => ({
    fetchAllUsers: build.query<User[], number>({
      query: (limit: number = 5) => ({
        url: `${URL.USERS}`,
        params: {
          _limit: limit,
        },
      }),
      providesTags: () => [ConstantsString.USER],
    }),
    createUser: build.mutation<User, Omit<User, `${ConstantsString.ID}`>>({
      query: (user) => ({
        url: `${URL.USERS}`,
        method: `${Methods.POST}`,
        body: user,
      }),
      invalidatesTags: [ConstantsString.USER],
    }),
    updateUser: build.mutation<User, User>({
      query: (user) => ({
        url: `${URL.USERS}/${user.id}`,
        method: `${Methods.PUT}`,
        body: user,
      }),
      invalidatesTags: [ConstantsString.USER],
    }),
    deleteUser: build.mutation<User, User>({
      query: (user) => ({
        url: `${URL.USERS}/${user.id}`,
        method: `${Methods.DELETE}`,
        body: user,
      }),
      invalidatesTags: [ConstantsString.USER],
    }),
  }),
});

export default userAPI;
