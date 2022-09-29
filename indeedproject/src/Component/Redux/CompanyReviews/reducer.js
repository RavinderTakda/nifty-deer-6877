import {
  FETCH_COMPANY_REQUEST,
  FETCH_COMPANY_SUCCESS,
  FETCH_COMPANY_DETAILS,
  FETCH_COMPANY_FAILURE,
} from "./actionTypes";

const initState = {
  isLoading: true,
  isError: false,
  company: [],
};

export const CompanyReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_COMPANY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_COMPANY_SUCCESS:
      return {
        ...state,
        company: payload,
        isLoading: false,
      };
    case FETCH_COMPANY_FAILURE:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
