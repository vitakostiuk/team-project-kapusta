import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    // baseUrl: 'https://team-project-kapusta.herokuapp.com',
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
    fullTransactions: builder.query({
      query: params =>
        `/api/transactions/?month=${params.month}&year=${params.year}`,
    }),
    getTransactionsByExpense: builder.query({
      query: () => '/api/transactions/expense',
    }),
    getTransactionsByIncome: builder.query({
      query: () => '/api/transactions/income',
    }),
    getSummaryTransactions: builder.query({
      query: type => `/api/transactions/reports/${type}`,
    }),
    setTransactionExpense: builder.mutation({
      query: newTransaction => ({
        url: '/api/transactions/expense',
        method: 'POST',
        body: newTransaction,
      }),
    }),
  }),
});

export const {
  useGetTransactionsQuery,
  useFullTransactionsQuery,
  useGetTransactionsByExpenseQuery,
  useGetTransactionsByIncomeQuery,
  useSetTransactionExpenseMutation,
  useGetSummaryTransactionsQuery,
} = transactionsApi;
