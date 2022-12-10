import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['transactions', 'balance'],
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://team-project-kapusta.herokuapp.com',
    baseUrl: 'https://team-project-kapusta.onrender.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
