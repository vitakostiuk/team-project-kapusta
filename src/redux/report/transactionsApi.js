// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseApi } from 'redux/baseApi';

export const transactionsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getTransactions: builder.query({
      query: () => '/api/categories/',
    }),
    fullTransactions: builder.query({
      query: params =>
        `/api/transactions/?month=${params.month}&year=${params.year}`,
    }),
    getTransactionsByExpense: builder.query({
      query: params =>
        `/api/transactions/expense?day=${params.day}&month=${params.month}&year=${params.year}`,
      providesTags: ['transactions'],
    }),
    getTransactionsByIncome: builder.query({
      query: params =>
        `/api/transactions/income?day=${params.day}&month=${params.month}&year=${params.year}`,
      providesTags: ['transactions'],
    }),
    getSummaryTransactions: builder.query({
      query: type => `/api/transactions/reports/${type}`,
      providesTags: ['transactions'],
    }),
    setTransactionExpense: builder.mutation({
      query: newTransaction => ({
        url: `/api/transactions/expense`,
        method: 'POST',
        body: newTransaction,
      }),
      invalidatesTags: ['transactions'],
    }),
    setTransactionIncome: builder.mutation({
      query: newTransaction => ({
        url: `/api/transactions/income`,
        method: 'POST',
        body: newTransaction,
      }),
      invalidatesTags: ['transactions'],
    }),
    deleteTransaction: builder.mutation({
      query: id => ({
        url: `/api/transactions/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['transactions'],
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
  useGetSummaryTransactionsQuery,
  useGetTransactionsByExpenseAndDataQuery,
} = transactionsApi;
