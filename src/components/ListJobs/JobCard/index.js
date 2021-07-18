import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../../../actions/jobListingActions';
import * as Styles from './styles'

const JobCard = ({jobData}) => {

  const filters = useSelector(state => state.jobListing.filters)
  const dispatch = useDispatch()

  const handleAddFilter = (e) => {
    let filter = e.target.getAttribute('data-filter')

    dispatch(addFilter({
      id: filters.length + 1,
      target: filter
    }))

  }

  return (
    <Styles.JobWrapper>
      <Styles.JobInfoImageWrapper role="contentinfo">

        <Styles.JobImageWrapper>
          <img src={jobData.logo} alt={`Company ${jobData.company}`} />
        </Styles.JobImageWrapper>

        <Styles.JobInfoWrapper>
        
          <Styles.JobCompany>
            {jobData.company}
            <div role="contentinfo">
              {jobData.new && (<span className="is__new">NEW!</span>)}
              {jobData.featured && (<span className="is__featured">FEATURED</span>)}
            </div>
          </Styles.JobCompany>
          <Styles.JobOffice>
            {jobData.position}
          </Styles.JobOffice>
          <Styles.JobPublish>
            {
              jobData.postedAt && (
                <li>{jobData.postedAt}</li>
              )
            }
            {
              jobData.contract && (
                <>
                  <li className="publish__dots"></li>
                  <li>{jobData.contract}</li>
                </>
              )
            }
            {
              jobData.location && (
                <>
                  <li className="publish__dots"></li>
                  <li>{jobData.location}</li>
                </>
              )
            }
          </Styles.JobPublish>

        </Styles.JobInfoWrapper>
      </Styles.JobInfoImageWrapper>

      <Styles.JobTools>
        {
          jobData.tools.length > 0 && jobData.tools.map(tool => {
            return (
              <li key={`#${tool}`}>
                <button type="button" data-filter={tool} onClick={e => handleAddFilter(e)}>
                  {tool}
                </button>
              </li>
            )
          })
        }
        {
          jobData.languages.length > 0 && jobData.languages.map(language => {
            return (
              <li key={`#${language}`}>
                <button type="button" data-filter={language} onClick={e => handleAddFilter(e)}>
                  {language}
                </button>
              </li>
            )
          })
        }
      </Styles.JobTools>
    </Styles.JobWrapper>
  )
}

export default JobCard;