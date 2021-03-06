import Head from 'next/head'
import Layout from 'components/layout'
import { initApolloClient } from 'graphql/apollo'
import { GET_COMPANIES, GET_COMPANY_JOBS } from 'graphql/queries'
import JobList from 'components/JobList'

function Company({jobs, companyName}) {
  return (
    <Layout>
      <JobList
        jobs={jobs}
      />
      <Head>
        <title>{companyName} Jobs - NextJobs</title>
      </Head>
    </Layout>
  )
}

export async function getStaticPaths() {
  const apolloClient = initApolloClient()
  const query = await apolloClient.query({
    query: GET_COMPANIES
  })
  const companyIds = query.data.companies || []
  const paths = companyIds.map(id => ({params: {id: id.id}}))
  return {paths, fallback: false}
}

export async function getStaticProps({ params }) {
  const apolloClient = initApolloClient()
  const query = await apolloClient.query({
    query: GET_COMPANY_JOBS, variables: {id: params.id}
  })
  const jobs = query.data.companies[0].jobs || []
  return {props: {jobs, companyName: query.data.companies[0].name}}
}

export default Company
