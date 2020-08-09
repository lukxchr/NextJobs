import gql from 'graphql-tag'

export const GET_FEATURED_JOBS = gql`
  query GetFeaturedJobs {
    jobs(where: {isFeatured: {_eq: true}}) {
      company {
        id
        name
        logoPath
      }
      id
      title
      isFeatured
      created_at
      salary
      location {
        id
        name
      }
      job_tags {
        tag {
          id
          name
        }
      }
    }
  }
`

export const GET_JOBS = gql`
  query GetJobs($query: String = "%") {
    jobs(where: {title: {_ilike: $query}}, order_by: {isFeatured: desc, created_at: desc}) {
      company {
        id
        name
        logoPath
      }
      id
      title
      isFeatured
      created_at
      salary
      location {
        id
        name
      }
      job_tags {
        tag {
          id
          name
        }
      }
    }
  }
`

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
