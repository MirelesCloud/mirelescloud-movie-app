import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_MOVIE } from './query'
import { Movie } from '../../../Types'
import MovieDetail from './MovieDetail'

const Index: React.FC<Movie> = ({match}: any) => {
  const { data, loading, error } = useQuery(GET_MOVIE, {
    variables: {
      id: match.params.id
    }
  })

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>Sorry, there are no details for this movie.</div>
  }
  console.log(data)
  
  const { 
    id,
    title, 
    overview, 
    poster_path, 
    release_date, 
    tagline, 
    vote_average, 
    runtime } = data?.movie
 
  return (
    <MovieDetail {...{
      id,
      title, 
      overview, 
      poster_path, 
      release_date, 
      tagline, 
      vote_average, 
      runtime
    }}
    />
  )
}

export default Index