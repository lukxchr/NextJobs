import Head from 'next/head'
import Layout from 'components/layout'
import { initApolloClient } from 'graphql/apollo'
import { GET_LOCATIONS, GET_LOCATION_JOBS } from 'graphql/queries'
import JobList from 'components/JobList'

function Location({jobs, locationName}) {
  return (
    <Layout>
      <JobList
        jobs={jobs}
      />
      <Head>
        <title>Jobs in {locationName} - NextJobs</title>
      </Head>
    </Layout>
  )
}

export async function getStaticPaths() {
  const apolloClient = initApolloClient()
  const query = await apolloClient.query({
    query: GET_LOCATIONS
  })
  const locations = query.data.locations || []
  const paths = locations.map(location => ({params: {id: location.id}}))
  return {paths, fallback: false}
}

export async function getStaticProps({ params }) {
  const apolloClient = initApolloClient()
  const query = await apolloClient.query({
    query: GET_LOCATION_JOBS, variables: {id: params.id}
  })
  const jobs = query.data.locations[0].jobs || []
  return {props: {jobs, locationName: query.data.locations[0].name}}
}

export default Location
