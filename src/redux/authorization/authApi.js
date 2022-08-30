import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['auth'],
  endpoints: builder => ({
    register: builder.mutation({
      query: newUser => ({
        url: 'api/auth/register',
        method: 'POST',
        body: newUser,
      }),
    }),
    login: builder.mutation({
      query: userInfo => ({
        url: 'api/auth/login',
        method: 'POST',
        body: userInfo,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: 'api/auth/logout',
        method: 'POST',
        headers: {
          authorization: '',
        },
      }),
    }),
    fetchCurrentUser: builder.query({
      async queryFn(_arg, { getState }, _extraOptions, baseQuery) {
        const persistedState = getState().auth.token;

        if (persistedState === null) {
          return persistedState;
        }

        const result = await baseQuery({
          url: 'api/auth/current',
          method: 'GET',
          headers: { authorization: `Bearer ${persistedState}` },
        });

        return result;
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useFetchCurrentUserQuery,
} = authApi;
