import React from 'react'
import Layout from '../components/layout'

const Categories = (props) => {
  return (
    <Layout>
      <div>abc </div>
      {/* {props.data.map(d => { <div>{d}</div> })} */}
      {props.data[0].name.toString()}
    </Layout>
  )
}

export async function getStaticProps () {
  const data = [
    { id: 1, name: 'react' },
    { id: 2, name: 'vue' },
    { id: 3, name: 'angular' },
    { id: 4, name: 'express' }
  ]

  return {
    props: {
      data
    }
  }
}

export default Categories
