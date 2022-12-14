import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { user, token } = action.payload.data;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    logIn: (state, action) => {
      const { user, token } = action.payload.data;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    loginGoogle: (state, action) => {
      const { token, email } = action.payload;
      state.token = token;
      state.user.email = email;
      state.isLoggedIn = true;
    },
    logOut: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    refreshUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
      state.isLoggedIn = true;
    },
    updateAvatarUser: (state, action) => {
      const { AvatarUrl } = action.payload;
      console.log('slice', AvatarUrl);

      state.user.avatarURL = AvatarUrl;
    },
  },
});

export const {
  registerUser,
  logIn,
  logOut,
  refreshUser,
  loginGoogle,
  updateAvatarUser,
} = authSlice.actions;
export default authSlice.reducer;
