import { JOBS_FAILURE, JOBS_REQUEST, JOBS_SUCCESS } from "./actionTypes";

const initState = {
  isLoading:true,
  isError:false,
    jobs:[],
}

export const topPayingJobsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case JOBS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case JOBS_SUCCESS:
      return {
        ...state,
        jobs: payload,
        isLoading:false,
      };
    case JOBS_FAILURE:
      return {
        ...state,
        isError:true,
      };
    default:
      return state;
  }
};
