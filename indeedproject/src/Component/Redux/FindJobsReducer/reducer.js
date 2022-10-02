




import {  JOBS_SEARCH_FAILURE, JOBS_SEARCH_REQUEST, JOBS_SEARCH_SUCCESS, LOADING_JOBS_SEARCH_SUCCESS, lOADING_SUCESS, SINGLE_JOBS_SEARCH_FAILURE, SINGLE_JOBS_SEARCH_REQUEST, SINGLE_JOBS_SEARCH_SUCCESS } from "./actiontypes";

const initState = {
  loading:true,
  isLoading:true,
  isError:false,
    data:[],
    singledata:[]
}




export const SearchJobsReducer = (state = initState, action) => {


    const {type,payload} =action

    // console.log("dfsdfsdf")
    console.log("sdf",payload)
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


      case SINGLE_JOBS_SEARCH_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case SINGLE_JOBS_SEARCH_SUCCESS:
        return {
          ...state,
          singledata: payload,
          isLoading:false,
         
        };
      case SINGLE_JOBS_SEARCH_FAILURE:
        return {
          ...state,
          data:[],
          isError:true,
        };

case lOADING_SUCESS:
  return{...state,loading:payload}



    default:
      return state;
  }
};
