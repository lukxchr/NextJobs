import React from 'react'
import Layout from 'components/layout'
import { initApolloClient } from 'graphql/apollo'
import { GET_LOCATIONS } from 'graphql/queries'

function Locations ({ locations }) {
  return (
    <Layout>
      <h3>placeholder: locations:</h3>
      {locations.map(location => (<div key={location.id}>{location.id} -- {location.name} -- {location.jobs_aggregate.aggregate.count}</div>))}
    </Layout>
  )
}

export async function getStaticProps () {
  const apolloClient = initApolloClient()
  const query = await apolloClient.query({
    query: GET_LOCATIONS
  })
  const locations = query.data.locations || []
  return {
    props: {
      locations
    },
    revalidate: 60
  }
}

export default Locations
