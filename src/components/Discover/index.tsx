import React from 'react'
import { useQuery } from '@apollo/client'
import Discover from './Discover'
import { QUERY_DISCOVER_MOVIES } from './query'
import { Movies } from '../../Types'

const DiscoverContainer = () => {
  const { data, loading, error } = useQuery<Movies>(QUERY_DISCOVER_MOVIES)
    if (loading) {
      return <div>Loading...</div>
    }

    if (error) {
      return <div>Error !!!!</div>
    }
    console.log(data)
    return React.createElement<Movies>(Discover, data)
}

export default DiscoverContainer