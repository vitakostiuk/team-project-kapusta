const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getToken = state => !!state.auth.token;
const getUserAvatar = state => state.auth.user.avatarURL;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getToken,
  getUserAvatar,
};

export default authSelectors;
