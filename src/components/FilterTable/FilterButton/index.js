import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import * as Styles from './styles'
import { useDispatch } from 'react-redux';
import { removeFilter } from '../../../actions/jobListingActions';

const FilterButton = ({filter}) => {

  const dispatch = useDispatch()

  const handleRemoveFilter = () => {
    dispatch(removeFilter(filter.id))
  }

  return (
    <Styles.FilterItem>
      <Styles.FilterText>
        {filter.target}
      </Styles.FilterText>
      <Styles.FilterButton onClick={handleRemoveFilter}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </Styles.FilterButton>
    </Styles.FilterItem>
  )
}

export default FilterButton;