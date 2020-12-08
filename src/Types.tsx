export interface Movie {
  id: number;
  title: string;
  release_date: string;
  backdrop_path: string;
  poster_path: string;
}

export interface Movies {
  movies: [Movie]
  searchMovie: [Movie]
}