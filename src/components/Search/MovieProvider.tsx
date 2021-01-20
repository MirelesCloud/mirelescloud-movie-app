import React, { createContext, useState } from 'react'

const MovieContext = createContext<any>(undefined)
const MovieDispatchContext = createContext<any>(undefined)

const MovieProvider = ({ children }: any) => {
  const [movieList, setMovieList] = useState({
    id: "pussy"
  })
  return (
    <MovieContext.Provider value={movieList}>
      <MovieDispatchContext.Provider value={setMovieList}>
        {children}
      </MovieDispatchContext.Provider>
    </MovieContext.Provider>
  )
}

export { MovieProvider, MovieContext, MovieDispatchContext}