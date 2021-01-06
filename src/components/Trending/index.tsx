import React from 'react'
import { useQuery } from '@apollo/client'
import Trending from './Trending'
import { QUERY_TRENDING_MOVIES} from './query'
import { Movies } from '../../Types'


const HomeContainer = () => {
  const { data, loading, error } = useQuery<Movies>(QUERY_TRENDING_MOVIES)
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error :(</div>
  }
  return React.createElement<Movies>(Trending, data)
}

export default HomeContainer