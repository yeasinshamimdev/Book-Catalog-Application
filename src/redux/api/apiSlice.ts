import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catalog-backend-l8vj.onrender.com/api/v1",
  }),
  tagTypes: ["Book"],

  endpoints: (builder) => ({
    //get single Book
    singleBook: builder.query({
      query: (id: string) => ({
        url: `/book/${id}`,
      }),
    }),

    //create a Book
    createBook: builder.mutation({
      query: (newBook) => ({
        url: "/book",
        method: "POST",
        body: newBook,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Book"],
    }),

    //delete a Book
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Book"],
    }),

    //update a Book
    updateBook: builder.mutation({
      query: ({ id, newBook }) => ({
        url: `/book/${id}`,
        method: "PATCH",
        body: JSON.stringify(newBook),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Book"],
    }),

    //get all Books
    getBooks: builder.query({
      query: () => ({
        url: "/book",
      }),
      providesTags: ["Book"],
    }),
  }),
});

export const {
  useSingleBookQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useGetBooksQuery,
} = api;
