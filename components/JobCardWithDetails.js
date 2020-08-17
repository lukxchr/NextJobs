import React from 'react'

import JobCard from './JobCard'

function JobCardWithDetails ({ job }) {
  return (
    <div className='mt-8 mx-4 md:mx-16'>
      <JobCard job={job} />
      <div className='bg-gray-100 shadow-md rounded border-gray-300 border-t-2 text-xl p-4 mx-0'>{job.description}</div>
      <div className='bg-gray-100 shadow-md rounded border-gray-300 border-t-2 p-4 mx-0'>
        <button
          href='#'
          className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10'
          onClick={() => alert(`placeholder: apply clicked for ${job.id}`)}
        >
        Apply
        </button>
      </div>
    </div>
  )
}

export default JobCardWithDetails
