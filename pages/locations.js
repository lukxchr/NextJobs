import Head from 'next/head'
import ReactTooltip from 'react-tooltip'
import { useState } from 'react'
import Layout from 'components/layout'
import MapChart from 'components/MapChart'
import CategoryGrid from 'components/CategoryGrid'
import { initApolloClient } from 'graphql/apollo'
import { GET_LOCATIONS } from 'graphql/queries'

function Locations ({ locations }) {
  const [tooltipContent, setTooltipContent] = useState('')

  const remoteLoctions = locations.filter(location => location.coords === null)
  const nonremoteLocations = locations.filter(location => location.coords !== null)

  return (
    <Layout>
      <MapChart
        locations={nonremoteLocations}
        setTooltipContent={setTooltipContent}
      />
      <div className='flex items-center justify-center mt-4'>
        <CategoryGrid
          categories={remoteLoctions}
          detailHrefRoot='/locations'
        />
      </div>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <Head>
        <title>Locations - NextJobs</title>
      </Head>
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
