import Layout from '../components/layout'
import { initApolloClient } from '../graphql/apollo'
import { GET_TAGS } from '../graphql/queries'

const Categories = (props) => {
  return (
    <Layout>
      <h3>placeholder: categories:</h3>
      {props.categories.map(category => (<div key={category.id}>{category.id} -- {category.name} -- {category.tag_jobs_aggregate.aggregate.count}</div>))}
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
