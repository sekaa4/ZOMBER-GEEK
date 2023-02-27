import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import URL from "../models/URL";
import ConstantsString from "../models/ConstantsString";
import Methods from "../models/Methods";
import { LoginResponse, RegistrationResponse, User } from "../models/User.type";

const userAPI = createApi({
  reducerPath: `${ConstantsString.USER_API}`,
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL.BASE_URL}`,
    credentials: "include",
  }),
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
    createUser: build.mutation<RegistrationResponse, User>({
      query: (user) => ({
        url: `${URL.SIGNUP}`,
        method: `${Methods.POST}`,
        body: user,
      }),
      invalidatesTags: [ConstantsString.USER],
    }),
    loginUser: build.mutation<LoginResponse, User>({
      query: (user) => ({
        url: `${URL.LOGIN}`,
        method: `${Methods.POST}`,
        body: user,
      }),
      invalidatesTags: [ConstantsString.USER],
    }),
    updateUser: build.mutation<User, User>({
      query: (user) => ({
        url: `${URL.USERS}/${user.userName}`,
        method: `${Methods.PUT}`,
        body: user,
      }),
      invalidatesTags: [ConstantsString.USER],
    }),
    deleteUser: build.mutation<User, User>({
      query: (user) => ({
        url: `${URL.USERS}/${user.userName}`,
        method: `${Methods.DELETE}`,
        body: user,
      }),
      invalidatesTags: [ConstantsString.USER],
    }),
  }),
});

export default userAPI;
