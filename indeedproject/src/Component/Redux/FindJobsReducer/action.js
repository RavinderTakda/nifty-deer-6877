
import axios from "axios";
import { useDispatch } from "react-redux";
import { JOBS_SEARCH_FAILURE, JOBS_SEARCH_REQUEST, JOBS_SEARCH_SUCCESS, LOADING_FAILURE,LOADING_REQUEST, lOADING_SUCESS, SINGLE_JOBS_SEARCH_FAILURE, SINGLE_JOBS_SEARCH_REQUEST, SINGLE_JOBS_SEARCH_SUCCESS } from "./actiontypes";



export const jobsearchRequest = () => {
  return {
    type:JOBS_SEARCH_REQUEST,
  };
};

export const jobsearchSuccess = (payload) => {
    // console.log("payload",payload)
  return {
    type:JOBS_SEARCH_SUCCESS,
    payload,
  };
};

export const jobsearchFailure = (err) => {
  return {
    type:JOBS_SEARCH_FAILURE,
    err,
  };
};


export const singlejobsearchRequest = () => {
  return {
    type:SINGLE_JOBS_SEARCH_REQUEST,
  };
};

export const singlejobsearchSuccess = (payload) => {
    console.log("payload",payload)
  return {
    type:SINGLE_JOBS_SEARCH_SUCCESS,
    payload,
  };
};

export const singlejobsearchFailure = (err) => {
  return {
    type:SINGLE_JOBS_SEARCH_FAILURE,
    err,
  };
};






export const SearchTopPayingJobs = (params) => (dispatch) => {
    // console.log('searchbycity')
  dispatch(jobsearchRequest());
  return axios
    .get("https://json-server-999.herokuapp.com/jobs",params)
    .then((response) => {
      dispatch(jobsearchSuccess(response.data));
    //   console.log(response.data)
    })
    .catch((err) => {
      dispatch(jobsearchFailure(err));
      // console.log(err)
    });
};




export const SingleFullDataJobs = (params) => (dispatch) => {
  // console.log('searchbycity')
dispatch(singlejobsearchRequest());
return axios
  .get("https://json-server-999.herokuapp.com/jobs",params)
  .then((response) => {
    dispatch(singlejobsearchSuccess(response.data));
  //   console.log(response.data)
  })
  .catch((err) => {
    dispatch(singlejobsearchFailure(err));
    console.log(err)
  });
};



export const LoadinggetData=(data)=>(dispatch)=>{
console.log("laoding",data)

  dispatch({type:LOADING_REQUEST})
  dispatch({type:lOADING_SUCESS,payload:data})
  dispatch({type:LOADING_FAILURE})
}
 