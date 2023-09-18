import * as elements from "typed-html"

import IMovie from "./IMovies"
import Movie from "./Movie"

export default ({ movies }: { movies: IMovie[] }) => (
  <ul id="movieList">
    {movies.map((movie, i) => (
      <Movie {...movie} id={i} />
    ))}
  </ul>
)
