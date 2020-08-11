import React from 'react'

import JobCard from './JobCard'

function JobCardWithDetails ({ job }) {
  return (
    <div className='mx-16 mt-8'>
      <JobCard job={job} />
      <div className='bg-gray-100 shadow-md rounded border-gray-300 border-t-2 text-xl p-4 mx-1'>{job.description}</div>
      <div className='bg-gray-100 shadow-md rounded border-gray-300 border-t-2 p-4 mx-1'>
        <button className='c'>Apply</button>
      </div>
    </div>
  )
}

export default JobCardWithDetails
