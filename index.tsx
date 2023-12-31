import { Elysia } from "elysia"
import { html } from "@elysiajs/html"
import * as elements from "typed-html"
import Layout from "./Layout"
import MovieList from "./MovieList"
import MovieEdit from "./MovieEdit"
import NewMovie from "./NewMovie"
import Movie from "./Movie"

const movies = [
  { title: "Inception", year: 2010 },
  { title: "The dark Knight", year: 2009 },
  { title: "Interstellar", year: 2014 },
]

const app = new Elysia()
app.use(html())

app.post("/movies", ({ body }: any) => {
  const newMovie = body
  movies.push(newMovie)
  return <Movie {...newMovie} id={movies.length - 1} />
})

app.get("/movies", ({ html }: any) =>
  html(
    <Layout>
      <MovieList movies={movies} />
      <h2>New movie</h2>
      <NewMovie />
    </Layout>
  )
)
app.get("/movies/:id", ({ params }) => {
  const id = Number(params.id)
  return <Movie title={movies[id].title} year={movies[id].year} id={id} />
})

app.get("/movies/:id/edit", ({ params }) => {
  const id = Number(params.id)
  return <MovieEdit title={movies[id].title} year={movies[id].year} id={id} />
})

app.put("/movies/:id", ({ body, params }: any) => {
  const id = Number(params.id)
  movies[id] = { ...movies[id], ...body }
  return <Movie title={movies[id].title} year={movies[id].year} id={id} />
})

app.delete("/movies/:id", ({ params }: any) => {
  movies.splice(params.id, 1)
  return null
})

app.listen(8080, () => {
  console.log(`[Elysia] Listening on port 8080`)
})
