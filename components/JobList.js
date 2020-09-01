import React from 'react'
import JobCard from 'components/JobCard'

function JobList ({ jobs }) {
  return (
    <div>
      {jobs.map(job =>
        <div key={job.id} className='mb-2 mx-0'>
          <JobCard job={job} />
        </div>)}
    </div>
  )
}

export default JobList
