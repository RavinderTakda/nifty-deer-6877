import { JOBS_FAILURE, JOBS_REQUEST, JOBS_SUCCESS } from "./actionTypes";
import axios from "axios";
export const jobsRequest = () => {
  return {
    type: JOBS_REQUEST,
  };
};

export const jobsSuccess = (payload) => {
  return {
    type: JOBS_SUCCESS,
    payload,
  };
};

export const jobsFailure = (err) => {
  return {
    type: JOBS_FAILURE,
    err,
  };
};

export const getTopPayingJobs = (payload) => (dispatch) => {
  dispatch(jobsRequest());
  return axios
    .get("https://json-server-mocker-robin.herokuapp.com/tpjobs")
    .then((response) => {
      dispatch(jobsSuccess(response.data));
    })
    .catch((err) => {
      dispatch(jobsFailure(err));
    });
};
