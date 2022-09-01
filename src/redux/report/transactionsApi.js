import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://team-project-kapusta.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['transactions'],
  endpoints: builder => ({
    getTransactions: builder.query({
      query: () => '/api/categories/',
    }),
  }),
});

export const { useGetTransactionsQuery } = transactionsApi;
