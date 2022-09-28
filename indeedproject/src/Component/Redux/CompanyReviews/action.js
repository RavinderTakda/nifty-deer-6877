import {
  FETCH_COMPANY_REQUEST,
  FETCH_COMPANY_SUCCESS,
  FETCH_COMPANY_FAILURE,
  FETCH_COMPANY_DETAILS,
} from "../actionTypes";
// import * as types from './actionTypes'
import axios from "axios";

const fetchRequest = (payload) => {
  return {
    type: FETCH_COMPANY_REQUEST,
    payload: payload,
  };
};

const fetchSuccess = (payload) => {
  return {
    type: FETCH_COMPANY_SUCCESS,
    payload: payload,
  };
};

const fetchFailure = (payload) => {
  return {
    type: FETCH_COMPANY_FAILURE,
    payload: payload,
  };
};

const fetchCompanyDetails = (payload) => {
  return {
    type: FETCH_COMPANY_DETAILS,
    payload: payload,
  };
};

export const searchCompany = (query) => (dispatch) => {
  dispatch(fetchRequest());

  const config = {
    method: "get",
    url: "https://indeed-mock-server.herokuapp.com/companies",
    params: {
      q: query,
    },
  };

  return axios(config)
    .then((res) => {
      dispatch(fetchSuccess(res.data));
    })
    .catch((err) => dispatch(fetchFailure("Somthing went wrong")));
};

export const getCompanyReviews = (payload) => (dispatch) => {
  axios
    .get(`https://indeed-mock-server.herokuapp.com/companies?id=${payload}`)
    .then((res) => {
      dispatch(fetchCompanyDetails(res.data));
    })
    // .then(`https://indeed-mock-server.herokuapp.com/companies?id=${payload}`)
    .catch((err) => console.log(err));
};







// const getCompanyReviews=(params)=>(dispatch)=>{
//   dispatch({type:types.FETCH_COMPANY_REQUEST})
//   return axios.get("https://indeed-mock-server.herokuapp.com/companies",params)
//   .then((r)=>{dispatch({type:types.FETCH_COMPANY_SUCCESS,payload:r.data})})
//   .catch((e)=>{dispatch({type:types.FETCH_COMPANY_FAILURE})})
// }

// export {getCompanyReviews};