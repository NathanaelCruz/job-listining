import { JOB_LISTING } from "../constants/jobListing"

export const setJobListing = (value) => ({
  type: JOB_LISTING.SET_JOB_LINSTING,
  payload: value
})


export const removeFilter = (value) => ({
  type: JOB_LISTING.REMOVE_FILTER,
  payload: {
    id: value
  }
})


export const clearFilters = () => ({
  type: JOB_LISTING.CLEAR_FILTER,
  payload: []
})


export const addFilter = (value) => ({
  type: JOB_LISTING.ADD_FILTER,
  payload: {
    filter: {
      id: value.id,
      target: value.target
    }
  }
})