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
    setTransactionExpense: builder.mutation({
      query: newTransaction => ({
        url: '/api/transactions/expense',
        method: 'POST',
        body: newTransaction,
      }),
    }),
    setTransactionIncome: builder.mutation({
      query: newTransaction => ({
        url: '/api/transactions/income',
        method: 'POST',
        body: newTransaction,
      }),
    }),
    deleteTransaction: builder.mutation({
      query: id => ({
        url: `/api/transactions/${id}`,
        method: 'DELETE',
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
  useSetTransactionIncomeMutation,
  useDeleteTransactionMutation,
} = transactionsApi;
