import gql from 'graphql-tag'

export const GET_COMPANIES = gql`
  query GetCompanies {
    companies {
      id
      created_at
      logoPath
      name
      website
    }
  }
`
