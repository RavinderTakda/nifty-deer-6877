import {
    COMPANY_INFO_FAILURE,
  COMPANY_INFO_REQUEST,
  COMPANY_INFO_SUCCESS,
} from "./actionTypes";

import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://json-server-mocker-robin.herokuapp.com/",
});

export const companyInfoRequest = () => {
  return {
    type: COMPANY_INFO_REQUEST,
  };
};
export const companyInfoSuccess = (payload) => {
  return {
    type: COMPANY_INFO_SUCCESS,
    payload,
  };
};
export const companyInfoFailure = (err) => {
  return {
    type: COMPANY_INFO_FAILURE,
    payload: err,
  };
};

export const getCompanyData = (id) => (dispatch) => {
  dispatch(companyInfoRequest());

const config = {
  url: `/tpcompanies/${id}`,
  method: "get",
};

  axios(config)
    .then((res) => {
      dispatch(companyInfoSuccess(res.data));
    })
    .catch((err) => {
      dispatch(companyInfoFailure(err));
    });
};

