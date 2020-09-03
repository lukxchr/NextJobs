import Head from 'next/head'
import Layout from 'components/layout'
import { initApolloClient } from 'graphql/apollo'
import { GET_TAGS, GET_TAG_JOBS } from 'graphql/queries'
import JobList from 'components/JobList'

function Category({jobs, categoryName}) {
  return (
    <Layout>
      <JobList
        jobs={jobs}
      />
       <Head>
        <title>{categoryName} Jobs - NextJobs</title>
      </Head>
    </Layout>
  )
}

export async function getStaticPaths() {
  const apolloClient = initApolloClient()
  const query = await apolloClient.query({
    query: GET_TAGS
  })
  const tags = query.data.tags || []
  const paths = tags.map(tag => ({params: {id: tag.id}}))
  return {paths, fallback: false}
}

export async function getStaticProps({ params }) {
  const apolloClient = initApolloClient()
  const query = await apolloClient.query({
    query: GET_TAG_JOBS, variables: {id: params.id}
  })
  const jobs = query.data.tags[0].jobs.map(job => job.job ) || []
  return {
    props: {jobs, categoryName: query.data.tags[0].name},
  }
}

export default Category
