import React from 'react'
import Layout from '../components/layout'

import { initApolloClient } from '../graphql/apollo'

import { GET_COMPANIES } from '../graphql/queries'

const Companies = ({ companies }) => {
  // const { loading, error, data } = useQuery(GET_COMPANIES)

  return (
    <Layout>
      <h3>placeholder: companies:</h3>
      {companies.map(company => <p key={company.id}>{company.name} -- {company.id}</p>)}
    </Layout>
  )
}

export async function getStaticProps () {
  // Get external data from the file system, API, DB, etc.
  const apolloClient = initApolloClient()
  const query = await apolloClient.query({
    query: GET_COMPANIES
  })
  const companies = query.data.companies || []
  // const { data } = useQuery(GET_COMPANIES)

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      companies
    },
    revalidate: 60
  }
}

export default Companies
