import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['user'],
  endpoints: builder => ({
    getBalance: builder.query({
      query: () => '/api/users/balance',
    }),
    changeBalance: builder.mutation({
      query: newBalance => ({
        url: '/api/users/balance',
        method: 'PATCH',
        body: newBalance,
      }),
    }),
  }),
});

export const { useGetBalanceQuery, useChangeBalanceMutation } = userApi;
