import Head from 'next/head'
import Layout from 'components/layout'
import { initApolloClient } from 'graphql/apollo'
import { GET_TAGS } from 'graphql/queries'
import CategoryGrid from 'components/CategoryGrid'

const Categories = ({ categories }) => {
  return (
    <Layout>
      <CategoryGrid
        categories={categories}
        detailHrefRoot='/categories'
      />
      <Head>
        <title>Categories - NextJobs</title>
      </Head>
    </Layout>
  )
}

export async function getStaticProps () {
  const apolloClient = initApolloClient()
  const query = await apolloClient.query({
    query: GET_TAGS
  })
  const categories = query.data.tags || []

  return {
    props: {
      categories
    },
    revalidate: 60
  }
}

export default Categories
