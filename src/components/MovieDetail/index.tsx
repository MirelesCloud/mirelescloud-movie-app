import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_MOVIE } from './query'
import { Movie } from '../../Types'
import { Container, Row, Column, Image, List, ListItem } from '../../Styles'

const MovieDetail: React.FC<Movie> = ({match}: any) => {
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
    title, 
    overview, 
    poster_path, 
    release_date, 
    tagline, 
    vote_average, 
    runtime } = data?.movie
  
 
  return (
    <Container>
      <Row>
        <Column>
          <Image src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`} alt={title}/>
          
        </Column>
        <Column>
          <h1>{title}</h1>
          <h2>{tagline}</h2>
          <p>{overview}</p>
          <List>
            <ListItem>Runtime: {runtime} min.</ListItem>
            <ListItem>Release Date: {release_date}</ListItem>
            <ListItem>Rating: {vote_average}</ListItem>
          </List>
        </Column>
      </Row>
    </Container>
  )
}

export default MovieDetail