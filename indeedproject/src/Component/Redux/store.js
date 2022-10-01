


import { applyMiddleware, combineReducers,  compose, legacy_createStore } from "redux";

import thunk from "redux-thunk";
import  {topPayingJobsReducer} from "../Redux/Salaryreducer/reducer"
import { companyInfoReducer } from "./CompanyInforeducer/reducer";
import { CompanyReducer } from "./CompanyReviews/reducer";
import { userReducer } from "./Authentication/reducer";

// import {SearchJobsReducer} from "../Redux/FindJobsReducer/reducer"


import { jobsByCategoryReducer } from "./JobByCategoryreducer/reducer";
import { topPayingCompReducer } from "./TopCompanyreducer/reducer";

const rootReducer = combineReducers({ 
  user:userReducer,
  CompanyReducer: CompanyReducer,
  topPayingJobsReducer:topPayingJobsReducer,
  topPayingComp:topPayingCompReducer,
  companyInfoReducer:companyInfoReducer,
  jobsByCategoryReducer:jobsByCategoryReducer
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);