import React, { useState, useCallback, useEffect  } from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_SEARCH_MOVIE } from './query'
import { Movies } from '../../Types'
import { Link } from 'react-router-dom'
import { Container, Form, Label, Input, Button, ContentWrapper, Card, CardImage  } from '../../Styles'

const Search = () => {
  const [query, setQuery] = useState("")
  const [id, setId] = useState(" ")
  
  const handleQuery = useCallback(newQuery => {
    setId(newQuery)
  }, [])

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
      console.log(error)
    return <div>Error</div>
    }
    if (data) {
      console.log(data?.searchMovie.map(i => i))
      data.searchMovie.map(movie => (
        <Card key={movie.id}>
          <Link to={`info/${movie.id}`}>
            <div>
              <CardImage src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title}/>
            </div>
          </Link>
        </Card>
      ))
    }
    
    console.log(id)
  
  return (
    <>
     <Container>
      <h1>Search</h1>
      <Form onSubmit={(e) => {
        e.preventDefault();
        handleQuery(query)
      }}>
        <Label htmlFor="query">Movie Name</Label>
        <Input onChange={(e) => setQuery(e.target.value)} type="text" name="query" value={query} placeholder="Saving Private Ryan"/>
        <Button type="submit">Search</Button>
      </Form>
     
     
      
      
    </Container>

    <ContentWrapper>
    {!!data ? data?.searchMovie.map(movie => (
        <Card key={movie.id}>
          <Link to={`info/${movie.id}`}>
           <CardImage src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title}/>
          </Link>
          
        </Card>
      )) : <div></div>
      } 
    </ContentWrapper>
    
    </>
   
  )
}

export default Search