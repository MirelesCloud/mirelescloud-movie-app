import React from 'react'
import { Movies } from '../../Types'
import { Container, CardImage} from '../../Styles'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Trending: React.FC<Movies> = (data) => {
  return (
    <Container>
      <h1>Trending</h1>
      <Carousel centerMode centerSlidePercentage={20}>
      {!!data.movies &&
          data.movies!.map((movie) => 
          !! movie && (
              <Link key={movie.id} to={`info/${movie.id}`}>
                <div>
                  <CardImage src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title}/>
                </div>
              </Link>
          ))
        }
      </Carousel>
    </Container>
  )
}

export default Trending