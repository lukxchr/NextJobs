import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import SearchBox from '../components/SearchBox'
import JobList from '../components/JobList'
import { initApolloClient } from '../graphql/apollo'
import { GET_JOBS } from '../graphql/queries'

function Home ({ jobs }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredJobs, setFilteredJobs] = useState(jobs)

  useEffect(() => {
    setFilteredJobs(
      jobs.filter(job => job.title.toUpperCase().includes(searchQuery.toUpperCase())))
  }, [searchQuery])

  return (
    <Layout>
      <div className='m-8'>
        <SearchBox
          onChange={value => setSearchQuery(value)}
          placeholder='Search jobs...'
        />
      </div>
      {filteredJobs.length
        ? <JobList jobs={filteredJobs} />
        : <div className='flex justify-center items-center text-xl text-gray-800 mx-16'>No results.</div>}

    </Layout>
  )
}

export async function getStaticProps () {
  const apolloClient = initApolloClient()
  const query = await apolloClient.query({
    query: GET_JOBS
  })
  const jobs = query.data.jobs || []

  return {
    props: {
      jobs
    },
    revalidate: 60
  }
}

export default Home
