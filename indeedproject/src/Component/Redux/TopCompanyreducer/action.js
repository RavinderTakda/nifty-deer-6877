import {
    COMPANIES_FAILURE,
    COMPANIES_REQUEST,
    COMPANIES_SUCCESS,
  } from "./actionTypes";
  import axios from "axios";
  export const compRequest = () => {
    return {
      type: COMPANIES_REQUEST,
    };
  };
  
  export const compSuccess = (payload) => {
    return {
      type: COMPANIES_SUCCESS,
      payload,
    };
  };
  
  export const compFailure = (payload) => {
    return {
      type: COMPANIES_FAILURE,
      err: payload,
    };
  };
  
  export const getTopPayingComp = (payload) => (dispatch) => {
    dispatch(compRequest());
    return axios
      .get("http://json-server-mocker-robin.herokuapp.com/tpcompanies")
      .then((response) => {
        dispatch(compSuccess(response.data));
      })
      .catch((err) => {
        dispatch(compFailure(err));
      });
  };
  