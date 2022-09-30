import {
    CATEGORY_JOBS_FAILURE,
    CATEGORY_JOBS_REQUEST,
    CATEGORY_JOBS_SUCCESS,
} from "./actionTypes";

const initState = {
  isLoading: true,
  isError: false,
  jobs_data: [],
};

export const jobsByCategoryReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CATEGORY_JOBS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORY_JOBS_SUCCESS:
      return {
        ...state,
        jobs_data: payload,
        isLoading: false,
      };
    case CATEGORY_JOBS_FAILURE:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
