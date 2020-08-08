import Head from 'next/head'
import Layout from '../components/Layout'

import SearchBox from '../components/SearchBox'
import JobCard from '../components/JobCard'

export default function Home () {
  return (
    <Layout testProp='test prop passed from index page comp'>
      <div className='m-8'>
        <SearchBox
          onChange={(v) => console.log(v)}
          placeholder='Search jobs'
        />
      </div>
      <div className='m-8 flex flex-wrap'>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>

    </Layout>
  )
}
