import React from 'react'
import { Movies } from '../../Types'
import { ContentWrapper, Card, CardImage} from '../../Styles'
import { Link } from 'react-router-dom'
import { Motion, spring, } from 'react-motion'
const Trending: React.FC<Movies> = (data) => {
  return (
    <>
      <h1>Trending</h1>
      <ContentWrapper>
        {!!data.movies &&
            data.movies!.map((movie) => 
            !! movie && (
                <Link key={movie.id} to={`/${movie.id}`}>
                      <Card>
                        <Motion 
                          defaultStyle={{transform: 0}}
                          style={{
                            transform: spring(100)}}
                        >
                        {interpolatingStyle => <CardImage style={interpolatingStyle} src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title}/>}
                        </Motion>
                      </Card>
                </Link>
            ))
          }
      </ContentWrapper>
    </>
  )
}

export default Trending