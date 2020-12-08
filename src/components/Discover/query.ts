import { gql } from '@apollo/client'

export const QUERY_DISCOVER_MOVIES = gql`
query DiscoverMovies {
  movies {
    id
    title
    poster_path
  }
}
`