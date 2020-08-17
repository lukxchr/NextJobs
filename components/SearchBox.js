import React from 'react'

function SearchBox ({ placeholder, onChange }) {
  return (
    <div className='flex items-center bg-gray-100 shadow pl-4 w-full overflow-hidden rounded md:w-1/2'>
      <svg className='inline-block h-6 ml-2 flex-shrink-0 fill-current' viewBox='0 0 24 24'><path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' /></svg>
      <input
        className='bg-gray-100 m-2 w-full font-semibold text-3xl focus:outline-none'
        type='text'
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBox
