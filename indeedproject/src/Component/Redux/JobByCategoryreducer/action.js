import { CATEGORY_JOBS_FAILURE, CATEGORY_JOBS_REQUEST, CATEGORY_JOBS_SUCCESS } from "./actionTypes";
import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://json-server-mocker-robin.herokuapp.com",
});

const categoryJobsRequest = () => {
  return {
    type: CATEGORY_JOBS_REQUEST,
  };
};
const categoryJobsSuccess = (payload) => {
  return {
    type: CATEGORY_JOBS_SUCCESS,
    payload,
  };
};
const categoryJobsFailure = (err) => {
  return {
    type: CATEGORY_JOBS_FAILURE,
    payload: err,
  };
};

export const categoryJobsSearch = (params) => (dispatch) => {
  dispatch(categoryJobsRequest());
  const config = {
    url: `/${params}`,
    method: "get",
  };
  axios(config)
    .then((res) => {
      dispatch(categoryJobsSuccess(res.data));
    })
    .catch((err) => {
      dispatch(categoryJobsFailure(err));
    });
};
