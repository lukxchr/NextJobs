import Link from 'next/link'
import React from 'react'

function CategoryCard ({ category, onClickHref }) {
  const jobsCount = category.jobs_aggregate.aggregate.count

  return (

    <div className='flex items-center h-24 w-full md:w-56 bg-gray-100 rounded-md shadow-md m-2 overflow-hidden'>
      <Link href={onClickHref}>
        <img
          className='h-20 w-24 object-contain cursor-pointer'
          src={category.logoPath}
          alt={`${category.name} logo`}
        />
      </Link>

      <Link href={onClickHref}>
        <a>
          <div className='p-2 flex flex-col'>
            <div className='uppercase text-gray-800 text-md font-bold leading-5 tracking-wide'>
              {category.name}
            </div>
            <div className='uppercase text-gray-600 text-xs'>
              {`${jobsCount} ${jobsCount === 1 ? 'job' : 'jobs'}`}
            </div>
          </div>
        </a>
      </Link>

    </div>

  )
}

export default CategoryCard
