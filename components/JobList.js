import React from 'react'
import JobCard from './JobCard'

const JobList = ({ jobs }) => {
  return (
    <div>
      {jobs.map(job =>
        <div key={job.id} className='mb-2 mx-8'>
          <JobCard job={job} />
        </div>)}
    </div>
  )
}

export default JobList