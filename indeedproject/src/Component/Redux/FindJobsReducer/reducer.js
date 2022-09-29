




import {  JOBS_SEARCH_FAILURE, JOBS_SEARCH_REQUEST, JOBS_SEARCH_SUCCESS } from "./actiontypes";

const initState = {
  isLoading:true,
  isError:false,
    data:[],
}




export const SearchJobsReducer = (state = initState, action) => {


    const {type,payload} =action

    console.log("dfsdfsdf")
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
