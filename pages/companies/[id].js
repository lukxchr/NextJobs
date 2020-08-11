import Layout from '../../components/layout'
import { initApolloClient } from '../../graphql/apollo'
import { GET_COMPANIES, GET_COMPANY_JOBS } from '../../graphql/queries'


function Company({jobs}) {
  return (
    <Layout>
    <div>
      {jobs.length} jobs
    </div>
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
  return {props: {jobs}}
}

export default Company
