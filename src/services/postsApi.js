import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5000/";

const createRequest = (url) => ({
  url
});

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => createRequest(`/posts`),
    }),
  }),
});

export const {useGetPostsQuery} = postsApi ;