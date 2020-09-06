import React from 'react'
import JobCard from 'components/JobCard'

function JobCardWithDetails ({ job }) {
  return (
    <div className='mt-8 mx-4 md:mx-16'>
      <JobCard job={job} />
      <div
        dangerouslySetInnerHTML={{ __html: job.description }}
        className='job-description bg-gray-100 shadow-md rounded border-gray-300 border-t-2 text-xl p-4 mx-0'
      >
        {/* {job.description} */}
      </div>
      <div className='bg-gray-100 shadow-md rounded border-gray-300 border-t-2 p-4 mx-0'>
        <button
          className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-500 md:py-4 md:text-lg md:px-10'
          onClick={() => alert(`placeholder: apply clicked for ${job.id}`)}
        >
        Apply
        </button>
      </div>
    </div>
  )
}

export default JobCardWithDetails
