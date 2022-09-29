
import axios from "axios";
import { JOBS_SEARCH_FAILURE, JOBS_SEARCH_REQUEST, JOBS_SEARCH_SUCCESS } from "./actiontypes";



export const jobsearchRequest = () => {
  return {
    type:JOBS_SEARCH_REQUEST,
  };
};

export const jobsearchSuccess = (payload) => {
    console.log("payload",payload)
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

export const SearchTopPayingJobs = (params) => (dispatch) => {
    console.log('searchbycity')
  dispatch(jobsearchRequest());
  return axios
    .get("https://json-server-999.herokuapp.com/jobs",params)
    .then((response) => {
      dispatch(jobsearchSuccess(response.data));
    //   console.log(response.data)
    })
    .catch((err) => {
      dispatch(jobsearchFailure(err));
      console.log(err)
    });
};
