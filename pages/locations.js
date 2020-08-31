import ReactTooltip from 'react-tooltip'
import { useState } from 'react'
import Layout from 'components/layout'
import MapChart from 'components/MapChart'
import { initApolloClient } from 'graphql/apollo'
import { GET_LOCATIONS } from 'graphql/queries'

function Locations ({ locations }) {
  const [tooltipContent, setTooltipContent] = useState('')
  return (
    <Layout>
      <MapChart
        locations={locations}
        setTooltipContent={setTooltipContent}
      />
      <ReactTooltip>{tooltipContent}</ReactTooltip>
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
