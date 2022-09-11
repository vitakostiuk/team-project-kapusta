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
      providesTags: ['transactions'],
    }),
    getTransactionsByExpense: builder.query({
      async queryFn(params, _api, _extraOptions, baseQuery) {
        const result = await baseQuery({
          url: `/api/transactions/expense?day=${params.day}&month=${params.month}&year=${params.year}`,
          method: 'GET',
        });

        if (result.data?.code === 404) {
          return { error: result.data };
        }

        if (!result.error) {
          return { data: result.data ?? null };
        }
      },
      providesTags: ['transactions'],
    }),
    getTransactionsByIncome: builder.query({
      async queryFn(params, _api, _extraOptions, baseQuery) {
        const result = await baseQuery({
          url: `/api/transactions/income?day=${params.day}&month=${params.month}&year=${params.year}`,
          method: 'GET',
        });

        if (result.data?.code === 404) {
          return { error: result.data };
        }

        if (!result.error) {
          return {
            data: result.data ?? null,
          };
        }
      },
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
    getTransactionsDates: builder.query({
      query: () => '/api/transactions/dates',
      providesTags: ['transactions'],
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
  useGetTransactionsDatesQuery,
} = transactionsApi;
