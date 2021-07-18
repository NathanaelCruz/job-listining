import { combineReducers } from "redux";
import { jobListingReducer } from './jobListingReducer'

export const reducers = combineReducers({
  jobListing: jobListingReducer
})