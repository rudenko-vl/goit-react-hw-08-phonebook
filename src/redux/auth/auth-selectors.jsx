export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getIsRefreshing = state => state.auth.isRefreshing;
export const getIsAuthorizing = state => state.auth.isAuthorizing;
export const getError = state => state.auth.error;
