import Layout from '../../components/layout'
import { initApolloClient } from '../../graphql/apollo'
import { GET_JOB_IDS, GET_JOB_BY_ID } from '../../graphql/queries'

import JobCardWithDetails from '../../components/JobCardWithDetails'


export default function Job({ id, job }) {
  return (
    <Layout>
      <JobCardWithDetails job={job}/>
    </Layout>
  )
}

export async function getStaticPaths() {
  const apolloClient = initApolloClient()
  const query = await apolloClient.query({
    query: GET_JOB_IDS
  })
  const jobIds = query.data.jobs || []
  const paths = jobIds.map(id => ({params: {id: id.id}}))
  return {paths, fallback: false}
}

export async function getStaticProps({ params }) {
  const apolloClient = initApolloClient()
  const query = await apolloClient.query({
    query: GET_JOB_BY_ID, variables: {id: params.id}
  })
  const job = query.data.jobs[0] || null
  return {props: {id: params.id, job}}
}

