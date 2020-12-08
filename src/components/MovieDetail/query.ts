import { gql } from '@apollo/client'

export const GET_MOVIE = gql`
  query GetMovie($id: ID!) {
    movie (id: $id) {
      id
      title
      overview
      poster_path
      release_date
      tagline
      vote_average
      homepage
      runtime          
    }
  }
`