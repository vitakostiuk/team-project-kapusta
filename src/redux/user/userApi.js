// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseApi } from 'redux/baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getBalance: builder.query({
      query: () => '/api/users/balance',
      providesTags: ['transactions'],
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
