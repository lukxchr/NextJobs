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
      {/* <h3>placeholder: categories:</h3>
      {props.categories.map(category => (<div key={category.id}>{category.id} -- {category.name} -- {category.jobs_aggregate.aggregate.count}</div>))} */}
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
