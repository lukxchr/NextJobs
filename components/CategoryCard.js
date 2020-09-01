import Link from 'next/link'
import React from 'react'

function CategoryCard ({ category, onClickHref }) {
  const jobsCount = category.jobs_aggregate.aggregate.count

  return (
    <Link href={onClickHref}>
      <a>
        <div className='flex items-center h-24 w-full md:w-56 bg-gray-100 rounded-md shadow-md m-2 overflow-hidden cursor-pointer'>
          <img
            className='h-20 w-24 object-contain'
            src={category.logoPath}
            alt={`${category.name} logo`}
          />
          <div className='p-2 flex flex-col'>
            <div className='uppercase text-gray-800 text-lg font-semibold leading-5 tracking-wide'>
              {category.name}
            </div>
            <div className='uppercase text-gray-600 text-xs'>
              {`${jobsCount} ${jobsCount === 1 ? 'job' : 'jobs'}`}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default CategoryCard
