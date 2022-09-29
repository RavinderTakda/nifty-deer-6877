import { applyMiddleware, combineReducers,  compose, legacy_createStore } from "redux";

import thunk from "redux-thunk";
import  {topPayingJobsReducer} from "../Redux/Salaryreducer/reducer"
import { CompanyReducer } from "./CompanyReviews/reducer";

const rootReducer = combineReducers({ CompanyReducer: CompanyReducer,topPayingJobsReducer:topPayingJobsReducer });
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);
