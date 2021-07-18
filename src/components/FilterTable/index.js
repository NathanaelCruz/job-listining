import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilters } from '../../actions/jobListingActions';
import FilterButton from './FilterButton';
import * as Styles from './styles'

const FilterTable = () => {

  const filters = useSelector(state => state.jobListing.filters)

  const dispatch = useDispatch()

  const handleClearFilters = () => {
    dispatch(clearFilters())
  }


  return (
    <Styles.FilterTable>
      <Styles.FilterTableList>
        {
          filters.map(filter => {
            return (
              <FilterButton key={`#filter-${filter.id}`} filter={filter} />
            )
          })
        }
      </Styles.FilterTableList>
      <Styles.FilterTableErased onClick={handleClearFilters}>
        Clear
      </Styles.FilterTableErased>
    </Styles.FilterTable>
  )
}

export default FilterTable;