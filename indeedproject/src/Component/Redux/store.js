import { applyMiddleware, combineReducers, createStore, compose } from "redux";

import thunk from "redux-thunk";

import { CompanyReducer } from "./CompanyReviews/reducer";

const rootReducer = combineReducers({ companies: CompanyReducer });
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);
