import { COMPANY_INFO_FAILURE, COMPANY_INFO_REQUEST, COMPANY_INFO_SUCCESS } from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const companyInfoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case COMPANY_INFO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case COMPANY_INFO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    }
    case COMPANY_INFO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return state;
  }
};
