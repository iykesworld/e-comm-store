import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/auth",
    credentials: "include",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: "/register",
        method: "POST",
        body: newUser,
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    getUser: builder.query({
        query: () => ({
            url: "/users",
            method: "GET",
        }),
        refetchOnMount: true,
        invalidatesTags: ['User']
    }),
    deleteUser: builder.mutation({
        query: (userId) => ({
            url: `/users/${userId}`,
            method: "DELETE",
        })
    }),
    updateUserRole: builder.mutation({
        query: (userId, role) => ({
            url: `/users/${userId}`,
            method: "PUT",
            body: {role},
        }),
        refetchOnMount: true,
        invalidatesTags: ['User']
    }),
    editProfile: builder.mutation({
        query: (profileData) => ({
            url: "/edit-profile",
            method: "PATCH",
            body: profileData,
        }),
        invalidatesTags: ["User"],
    }),
    uploadProfileImage:builder.mutation({
      query: (formData) => ({
            url: "/upload-profile-image",
            method: "POST",
            body: formData,
            credentials: "include",
      }),
      invalidatesTags: ["User"],
    })
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation, useGetUserQuery, useDeleteUserMutation, useUpdateUserRoleMutation, useEditProfileMutation, useUploadProfileImageMutation } = authApi;
export default authApi;
