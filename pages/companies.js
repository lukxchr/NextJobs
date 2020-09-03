import Head from 'next/head'
import Layout from 'components/layout'
import { initApolloClient } from 'graphql/apollo'
import { GET_COMPANIES } from 'graphql/queries'
import CategoryGrid from 'components/CategoryGrid'

const Companies = ({ companies }) => {
  // const { loading, error, data } = useQuery(GET_COMPANIES)

  return (
    <Layout>
      <CategoryGrid
        categories={companies}
        detailHrefRoot='/companies'
      />
      <Head>
        <title>Companies - NextJobs</title>
      </Head>
    </Layout>
  )
}

export async function getStaticProps () {
  const apolloClient = initApolloClient()
  const query = await apolloClient.query({
    query: GET_COMPANIES
  })
  const companies = query.data.companies || []
  return {
    props: {
      companies
    },
    revalidate: 60
  }
}

export default Companies
