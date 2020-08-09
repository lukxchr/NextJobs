import { withApollo, initApolloClient } from '../graphql/apollo'
import Head from 'next/head'

import Layout from '../components/layout'
import SearchBox from '../components/SearchBox'
import JobCard from '../components/JobCard'
import JobList from '../components/JobList'
import { GET_FEATURED_JOBS } from '../graphql/queries'
import { useJobs } from '../hooks/useJobs'

import { useEffect } from 'react'

function Home ({ featuredJobs }) {
  const { loading, error, jobs } = useJobs('')
  useEffect(() => {
    console.log(jobs)
  }, [jobs])

  return (
    <Layout testProp='test prop passed from index page comp'>
      <div className='m-8'>
        <SearchBox
          onChange={(v) => console.log(v)}
          placeholder='Search jobs'
        />
      </div>
      <JobList
        jobs={jobs}
      />
      {/* <div className='m-8 flex flex-wrap'>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div> */}

    </Layout>
  )
}

// export async function getStaticProps () {
//   const apolloClient = initApolloClient()
//   const query = await apolloClient.query({
//     query: GET_FEATURED_JOBS
//   })
//   const featuredJobs = query.data.jobs || []

//   return {
//     props: {
//       featuredJobs
//     },
//     revalidate: 60
//   }
// }

export default withApollo(Home)
