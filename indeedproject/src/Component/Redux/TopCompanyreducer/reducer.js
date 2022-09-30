import { COMPANIES_FAILURE, COMPANIES_REQUEST, COMPANIES_SUCCESS } from "./actionTypes";

const initState = {
  isLoading:true,
  isError:false,
  companies: [],
};

export const topPayingCompReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case COMPANIES_REQUEST:
      return {
        ...state,
        isLoading:true,
      };
    case COMPANIES_SUCCESS:
      return {
        ...state,
        companies: payload,
        isLoading:false,
      };
    case COMPANIES_FAILURE:
      return {
        ...state,
        isError:true,
      };
    default:
      return state;
  }
};
