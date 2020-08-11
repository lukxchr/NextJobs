import gql from 'graphql-tag'

export const GET_JOBS = gql`
  query GetJobs {
    jobs(order_by: {isFeatured: desc, created_at: desc}) {
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

export const GET_JOB_BY_ID = gql`
  query GetJobById($id: uuid) {
    jobs(where: {id: {_eq: $id}}) {
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
      description
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

export const GET_JOB_IDS = gql`
  query MyQuery {
    jobs {
      id
    }
  }
`

export const GET_TAG_JOBS = gql`
query GetTagJobs($id: uuid) {
  tags(where: {id: {_eq: $id}}) {
    id
    name
    tag_jobs {
      job {
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
  }
}
`

export const GET_COMPANY_JOBS = gql`
query GetCompanyJobs($id: uuid) {
    companies(where: {id: {_eq: $id}}) {
      id
      name
      logoPath
      website
      jobs {
        id
        created_at
        isFeatured
        company {
          id
          name
          logoPath
          website
        }
        job_tags {
          tag {
            id
            name
          }
        }
        salary
        title
        location {
          id
          name
        }
      } 
    }
  }
`

export const GET_LOCATION_JOBS = gql`
query GetLocationJobs($id: uuid = "35448e06-b88f-41a0-9e5e-d696d4a6f69c") {
  locations(where: {id: {_eq: $id}}) {
    id
    name
    jobs {
      id
      created_at
      isFeatured
      company {
        id
        name
        logoPath
        website
      }
      job_tags {
        tag {
          id
          name
        }
      }
      salary
      title
      location {
        id
        name
      }
    }
  }
}
`

export const GET_TAGS = gql`
  query GetTags {
    tags(order_by: {tag_jobs_aggregate: {count: desc}, name: asc}) {
      id
      name
      tag_jobs_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`

export const GET_LOCATIONS = gql`
  query GetLocations {
    locations(order_by: {jobs_aggregate: {count: desc}, name: asc}) {
      id
      name
      jobs_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`

export const GET_COMPANIES = gql`
  query GetCompanies {
    companies(order_by: {jobs_aggregate: {count: desc}, name: asc}) {
      id
      created_at
      logoPath
      name
      website
      jobs_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`

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
