


import { applyMiddleware, combineReducers,  compose, legacy_createStore } from "redux";

import thunk from "redux-thunk";
import  {topPayingJobsReducer} from "../Redux/Salaryreducer/reducer"
import { companyInfoReducer } from "./CompanyInforeducer/reducer";
import { CompanyReducer } from "./CompanyReviews/reducer";
<<<<<<< HEAD
import {SearchJobsReducer} from "../Redux/FindJobsReducer/reducer"


const rootReducer = combineReducers({ companies: CompanyReducer,topPayingJobsReducer:topPayingJobsReducer,SearchJobsReducer:SearchJobsReducer });
=======
import { jobsByCategoryReducer } from "./JobByCategoryreducer/reducer";
import { topPayingCompReducer } from "./TopCompanyreducer/reducer";

const rootReducer = combineReducers({ CompanyReducer: CompanyReducer,
  topPayingJobsReducer:topPayingJobsReducer,
  topPayingComp:topPayingCompReducer,
  companyInfoReducer:companyInfoReducer,
  jobsByCategoryReducer:jobsByCategoryReducer
});
>>>>>>> 97f4ab30e533461879217613e950386c015c3477
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);