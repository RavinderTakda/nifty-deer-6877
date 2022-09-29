



import {  JOBS_SEARCH_FAILURE, JOBS_SEARCH_REQUEST, JOBS_SEARCH_SUCCESS } from "./actionTypes";

const initState = {
  isLoading:true,
  isError:false,
    data:[],
}

export const SearchJobsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case JOBS_SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case JOBS_SEARCH_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading:false,
      };
    case JOBS_SEARCH_FAILURE:
      return {
        ...state,
        data:[],
        isError:true,
      };
    default:
      return state;
  }
};
