import * as elements from "typed-html"

export default () => (
  <form hx-post="/movies" hx-target="#movieList" hx-swap="beforeend">
    <input type="text" name="title" />
    <input type="number" name="year" />
    <button type="submit">Add</button>
  </form>
)
