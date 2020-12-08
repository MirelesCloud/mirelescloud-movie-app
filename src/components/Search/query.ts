import { gql } from '@apollo/client'

export const QUERY_SEARCH_MOVIE = gql`
query SearchMovies($id: ID!) {
  searchMovie(id: $id) {
    id
    title
    poster_path
  }
}
`