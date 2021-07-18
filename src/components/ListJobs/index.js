import React from 'react';
import { useSelector } from 'react-redux';
import FilterTable from '../FilterTable';
import JobCard from './JobCard';
import * as Styles from './styles'

const ListJobs = () => {

  const filters = useSelector(state => state.jobListing.filters)
  const listJobs = useSelector(state => state.jobListing.jobList)
  const filtersArr = filters.map(filter => {
    return filter.target
  })

  return (
    <Styles.ListWrapper>

      {
        filters.length > 0 && (<FilterTable />)
      }

      {
        listJobs.length > 0 && (
          <Styles.ListJobs>
            {
              filters.length === 0 ? listJobs.map(job => {
                return (
                  <JobCard key={job.id} jobData={job} />
                )
    
              }) : listJobs.map(job => {
                let validate = job.languages.some(result => filtersArr.includes(result)) || job.tools.some(result => filtersArr.includes(result))

                return validate && (
                  <JobCard key={job.id} jobData={job} />
                )
              })
            }
          </Styles.ListJobs>
        )
      }

    </Styles.ListWrapper>
  )
}

export default ListJobs;