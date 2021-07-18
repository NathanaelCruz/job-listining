import { JOB_LISTING } from "../constants/jobListing";

const INITIAL_STATE = {
  jobList: [],
  filters: []
}


export const jobListingReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case JOB_LISTING.SET_JOB_LINSTING:
      return {
        ...state,
        jobList: action.payload
      }
    case JOB_LISTING.ADD_FILTER:
      let validate = state.filters.filter(filter => {
        return filter.target === action.payload.filter.target
      })

      if(validate.length === 0){
        return {
          ...state,
          filters: [...state.filters, action.payload.filter]
        }
      }

      return {
        ...state
      }

    case JOB_LISTING.REMOVE_FILTER:

      let newStateFilter = state.filters.filter(filter => {
        return filter.id !== action.payload.id
      })

      return{
        ...state,
        filters: newStateFilter
      }
    case JOB_LISTING.CLEAR_FILTER:
      return{
        ...state,
        filters: []
      }
    default:
      return state
  }
}