import React from 'react'
import CategoryCard from './CategoryCard'

function CategoryGrid ({ categories, detailHrefRoot }) {
  return (
    <div className='flex flex-wrap justify-center -m-2'>
      {categories.map(category =>
        <CategoryCard
          key={category.id}
          category={category}
          onClickHref={`${detailHrefRoot}/${category.id}`}
        />)}
    </div>
  )
}

export default CategoryGrid
