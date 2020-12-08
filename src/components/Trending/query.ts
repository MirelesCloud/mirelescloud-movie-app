import { gql } from '@apollo/client'

export const QUERY_TRENDING_MOVIES = gql`
  query TrendingMovies {
    movies {
      id
      title
      release_date
      backdrop_path
      overview
      poster_path
      vote_count
    }
  }
`

