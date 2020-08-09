import { useQuery } from '@apollo/react-hooks'
import { GET_JOBS } from '../graphql/queries'

export const useJobs = (query) => {
  const { loading, error, data } = useQuery(GET_JOBS, {
    variables: { query: `%${query}%` }
  })

  return {
    loading,
    error,
    jobs: data ? data.jobs : []
  }
}
