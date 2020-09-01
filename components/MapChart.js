import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from 'react-simple-maps'
import Link from 'next/link'

function MapChart ({ locations, setTooltipContent }) {
  const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'

  const getTooltipContent = (location) => {
    const jobsCount = location.jobs_aggregate.aggregate.count
    return `${location.name} (${jobsCount} ${jobsCount === 1 ? 'job' : 'jobs'})`
  }

  return (
    <div className='md:h-96 bg-gray-100 border-solid border-1 border-gray-300 rounded-md shadow-md overflow-hidden'>
      <ComposableMap data-tip=''>
        <ZoomableGroup zoom={2.2} center={[-48, 20]}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill='#4C51BF'
                  stroke='#FFFFFF'
                  strokeWidth={0.5}
                />
              ))}
          </Geographies>
          {locations.map(location =>
            <Marker
              key={location.id}
              coordinates={[location.coords.longitude, location.coords.latitude]}
              // onClick={() => setTooltipContent(location.name)}
              onMouseEnter={() => setTooltipContent(getTooltipContent(location))}
              onMouseLeave={() => setTooltipContent('')}
            >
              <Link href={`/locations/${location.id}`}>
                <a>
                  <circle r={3} fill='#FF7918' />
                </a>
              </Link>
            </Marker>)}

        </ZoomableGroup>
      </ComposableMap>
    </div>
  )
}

export default MapChart
