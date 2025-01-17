import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://e-comm-server-five.vercel.app/api/reviews",
    credentials: "include",
  }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    postReview: builder.mutation({
        query: (reviewData) =>({
            url: '/post-reviews',
            method: 'POST',
            body: reviewData,
        }),
        invalidatesTags: (result, error, {productId})=>[{type: 'Reviews', id: productId}],
    }),
    getReviewsCount: builder.query({
        query: ()=>({
            url: '/total-reviews'
        }),
        providesTags: [{ type: "Reviews", id: "COUNT" }],
    }),
    getReviewsByUserId: builder.query({
        query: (userId) => ({
            url: `/${userId}`
        }),
        providesTags: (result, error, userId) => result.reviews ? result.reviews.map((review, index)=>({type: "Reviews", id: index})) : [{ type: "Reviews", id: userId }],
    })
    
  }),
});

export const { usePostReviewMutation, useGetReviewsCountQuery, useGetReviewsByUserIdQuery } = reviewsApi;
export default reviewsApi;
