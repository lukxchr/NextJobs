import React from 'react'
import Link from 'next/link'
import moment from 'moment'

function JobCard ({ job }) {
  const { id, company, title, isFeatured, created_at: createdAt, location, salary, job_tags: jobTags } = job
  const fromattedTimeSinceAdded = moment(createdAt, 'YYYYMMDD').fromNow()

  return (
    <div className={`${isFeatured ? 'bg-indigo-700' : 'bg-gray-100'} rounded-md overflow-hidden shadow-md w-full`}>
      <div className='bg-gray-100 py-2 ml-1 flex items-center md:justify-between'>
        <div className='flex items-center'>
          <img className='w-24 h-24 flex-shrink-0 ml-2 object-contain' src={company.logoPath} alt='' />
          <div className='ml-2'>
            <div className='flex items-baseline'>
              <Link href={`companies/${company.id}`}>
                <a className='text-indigo-700 text-sm hover:underline focus:underline cursor-pointer'>{company.name}</a>
              </Link>
              <div>
                {isFeatured &&
                  <div className='px-2 ml-1 bg-indigo-700 text-gray-100 text-xs font-semibold rounded-full uppercase'>
                    Featured
                  </div>}
              </div>
            </div>
            <Link href={`/jobs/${id}`}>
              <a
                className='text-lg font-bold font-gray-900 tracking-wide mt-1 cursor-pointer
              hover:underline'
              >{title}
              </a>
            </Link>
            <div className='flex flex-wrap text-xs text-gray-600'>
              <span>{fromattedTimeSinceAdded}</span>
              <span className='font-extrabold mx-1'>&#183;</span>
              <Link href={`/locations/${location.id}`}>
                <a className='hover:underline focus:underline cursor-pointer'>{location.name}</a>
              </Link>
              <span className='font-extrabold mx-1'>&#183;</span>
              <span>{salary}</span>
            </div>
            {/* tags section for sm and md screens */}
            <div className='flex flex-wrap mt-1 lg:hidden'>
              {jobTags.map(tag =>
                <Link
                  key={tag.tag.id}
                  href={`/categories/${tag.tag.id}`}
                >
                  <a className='flex items-center mt-2 mr-1 px-2 bg-indigo-200 text-indigo-600
              uppercase rounded-md text-xs tracking-wide font-semibold cursor-pointer
              hover:text-indigo-200 hover:bg-indigo-700 focus:text-indigo-200 focus:bg-indigo-700 outline-none'
                  >
                    {tag.tag.name}
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
        {/* tags section for lg screens */}
        <div className='hidden lg:flex mr-4 mt-1 overflow-hidden'>
          {jobTags.map(tag =>
            <Link
              key={tag.tag.id}
              href={`/categories/${tag.tag.id}`}
            >
              <a className='flex items-center mt-2 mr-1 px-2 bg-indigo-200 text-indigo-600
              uppercase rounded-md text-xs tracking-wide font-semibold cursor-pointer
              hover:text-indigo-200 hover:bg-indigo-700 focus:text-indigo-200 focus:bg-indigo-700 outline-none'
              >
                {tag.tag.name}
              </a>
            </Link>)}
        </div>
      </div>
    </div>
  )
}

export default JobCard
