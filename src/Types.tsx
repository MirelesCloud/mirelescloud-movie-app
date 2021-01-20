export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string,
  tagline: string,
  vote_average: number,
  runtime: number
}

export interface Movies {
  movies: [Movie]
  searchMovie: [Movie]
}