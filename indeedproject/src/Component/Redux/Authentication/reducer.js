import * as types from "./actionTypes";

const initialState = {
  user: "",
  isAuth: false,
  isAuthLoading: false,
  isAuthError: false,
  ErrorMsg: "",
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.USER_LOGIN_REQUEST: {
      return {
        ...state,
        isAuthLoading: true,
      };
    }
    case types.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthLoading: false,
        isAuth: true,
        user: payload,
      };
    }
    case types.USER_LOGIN_FAILURE: {
      return {
        ...state,
        isAuthError: true,
        isAuth: false,
        isAuthLoading: true,
        user: "",
      };
    }
    case types.USER_SIGNUP_SUCCESS: {
      return {
        ...state,
        isAuthLoading: false,
        user: payload,
        isAuthError: false,
      };
    }
    case types.USER_SIGNUP_FAILURE: {
      return {
        ...state,
        isAuthError: true,
        isAuth: false,
        isAuthLoading: false,
        user: "",
        ErrorMsg: payload,
      };
    }
    case types.SET_USER:
      return {
        ...state,
        isAuthLoading: false,
        user: payload,
      };
    default:
      return state;
  }
};
