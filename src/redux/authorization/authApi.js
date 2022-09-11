import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:3000',
    baseUrl: 'https://team-project-kapusta.herokuapp.com/',
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
    googleLogin: builder.mutation({
      query: () => ({
        url: 'api/auth/google',
        method: 'GET',
      }),
    }),
    fetchCurrentUser: builder.query({
      async queryFn(_arg, { getState }, _extraOptions, baseQuery) {
        const persistedState = getState().auth.token;

        if (persistedState === null) {
          return persistedState;
        }

        const result = await baseQuery({
          url: 'api/users/current',
          method: 'GET',
          headers: { authorization: `Bearer ${persistedState}` },
          providesTags: ['user'],
        });

        return result;
      },
    }),
    ForgotPassword: builder.mutation({
      query: userInfo => ({
        url: 'api/auth/forgot-password',
        method: 'PATCH',
        body: userInfo,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useFetchCurrentUserQuery,
  useGoogleLoginMutation,
  useForgotPasswordMutation,
} = authApi;
