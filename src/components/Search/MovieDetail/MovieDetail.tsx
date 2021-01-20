import React from 'react'
import { Movie } from '../../../Types'
import { useHistory } from 'react-router-dom'
import { Container, Row, Column, Image, List, ListItem } from '../../../Styles'
import SideBar from './SideBar'

const MovieDetail: React.FC<Movie> = ({
  title, 
  overview, 
  poster_path, 
  release_date, 
  tagline, 
  vote_average, 
  runtime }) => {
  
  const history = useHistory()
  
  return (
    <>
      <SideBar/>
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
            <button onClick={() => history.goBack()}>Back</button>
          </Column>
        </Row>
      </Container>
    </>
  )
}

export default MovieDetail