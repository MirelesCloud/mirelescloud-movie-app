import React, { useState, useCallback, useEffect  } from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_SEARCH_MOVIE } from './query'
import { Movies } from '../../Types'
import { Link } from 'react-router-dom'
import { MovieContext, MovieDispatchContext, MovieProvider } from './MovieProvider'
import { Form, Input, Button, ContentWrapper, Card, CardImage } from '../../Styles'
import img from '../../movie.png'
import movienight from '../../movienight.jpg'

const Search = () => {
  const [query, setQuery] = useState("")
  const [id, setId] = useState("")
  
  const handleQuery = useCallback(newQuery => {
    setId(newQuery)
  }, [])

  return (
    <>
     <ContentWrapper>
        <Form onSubmit={(e) => {
          e.preventDefault();
          handleQuery(query)
        }}>
        <Input onChange={(e) => setQuery(e.target.value)} type="text" name="query" value={query} placeholder="What are we looking for?"/>
        <Button type="submit">Search</Button>
        </Form>
      </ContentWrapper>
      {id === "" ? <ContentWrapper><img src={movienight} alt="movie-real"/></ContentWrapper> : <Result {...{id}}/>}
    </>
  )
}

const Result = ({id}: any) => {
  const { data, loading, error, refetch } = useQuery<Movies>(QUERY_SEARCH_MOVIE, {
    variables: { id: String(id)  }
  })

  useEffect(() => {
    refetch();

  }, [id, refetch])

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
  return <div>Error</div>
  }
  
  return (
    <ContentWrapper>
      {data ? data?.searchMovie.map(movie => (
        <Card key={movie.id}>
          <Link to={`${movie.id}`}>
          {movie.poster_path ? <CardImage src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title}/> : <CardImage src={img}/>}
          </Link>
        </Card>
      )) : <h1>Nothing Found</h1>
      } 
    </ContentWrapper>
  )
}

export default Search