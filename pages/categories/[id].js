import Layout from 'components/layout'
import { initApolloClient } from 'graphql/apollo'
import { GET_TAGS, GET_TAG_JOBS } from 'graphql/queries'
import JobList from 'components/JobList'

function Category({jobs}) {
  return (
    <Layout>
      <JobList
        jobs={jobs}
      />
    {/* <div>
    placeholder: {jobs.length} jobs for this category
    </div> */}
    </Layout>
  )
}

export async function getStaticPaths() {
  const apolloClient = initApolloClient()
  const query = await apolloClient.query({
    query: GET_TAGS
  })
  const tagIds = query.data.tags || []
  const paths = tagIds.map(id => ({params: {id: id.id}}))
  return {paths, fallback: false}
}

export async function getStaticProps({ params }) {
  const apolloClient = initApolloClient()
  const query = await apolloClient.query({
    query: GET_TAG_JOBS, variables: {id: params.id}
  })
  const jobs = query.data.tags[0].jobs.map(job => job.job ) || []
  return {
    props: {jobs},
  }
}

export default Category
