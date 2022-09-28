
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import  {topPayingJobsReducer} from "../Redux/Salaryreducer/reducer"
import thunk from "redux-thunk"
 const rootReducer=combineReducers({topPayingJobsReducer})
 export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))