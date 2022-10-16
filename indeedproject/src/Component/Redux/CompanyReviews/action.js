import {
  FETCH_COMPANY_REQUEST,
  FETCH_COMPANY_SUCCESS,
  FETCH_COMPANY_FAILURE,
  FETCH_COMPANY_DETAILS,
} from "./actionTypes";

import axios from "axios";
export const companyRequest = () => {
  return {
    type: FETCH_COMPANY_REQUEST,
  };
};

export const companySuccess = (payload) => {
  return {
    type: FETCH_COMPANY_SUCCESS,
    payload,
  };
};

export const companyFailure = (error) => {
  return {
    type: FETCH_COMPANY_FAILURE,
    error,
  };
};

export const getCompanyReviews = (params) => (dispatch) => {
  dispatch(companyRequest());
  return axios
    .get("https://dry-atoll-17355.herokuapp.com/companies",params)
    .then((response) => {
      dispatch(companySuccess(response.data));
    })
    .catch((error) => {
      dispatch(companyFailure(error));
    });
};


