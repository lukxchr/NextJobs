import Layout from '../../components/layout'
import { initApolloClient } from '../../graphql/apollo'
import { GET_LOCATIONS, GET_LOCATION_JOBS } from '../../graphql/queries'


function Location({jobs}) {
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
    query: GET_LOCATIONS
  })
  console.log(query.data)
  const locations = query.data.locations || []
  const paths = locations.map(location => ({params: {id: location.id}}))
  return {paths, fallback: false}
}

export async function getStaticProps({ params }) {
  const apolloClient = initApolloClient()
  const query = await apolloClient.query({
    query: GET_LOCATION_JOBS, variables: {id: params.id}
  })
  console.log(query.data)
  const jobs = query.data.locations[0].jobs || []
  return {props: {jobs}}
}

export default Location