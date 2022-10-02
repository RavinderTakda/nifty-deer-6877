import * as types from "./actionTypes";

const initial = {
  currentUser: null,
  isAuth: false,
  isLoading: false,
  isError: false,
};

export const userReducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_REQUEST:
    case types.LOGIN_REQUEST:
    case types.LOGOUT_REQUEST:
    case types.GOOGLE_SIGN_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        isAuth: false,
      };
    case types.SET_USER:
      return {
        ...state,
        isLoading: false,
        currentUser: payload,
      };

    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        currentUser: payload,
      };
    case types.REGISTER_FAILURE:
    case types.LOGIN_FAILURE:
    case types.LOGOUT_FAILURE:
    case types.GOOGLE_SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: payload,
        isAuth: false,
      };
    default:
      return state;
  }
};
