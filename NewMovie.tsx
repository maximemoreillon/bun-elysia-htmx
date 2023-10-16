import * as elements from "typed-html"

export default () => (
  <form hx-post="/movies" hx-target="#movieList" hx-swap="beforeend">
    <label for="titleInput">Title</label>
    <input type="text" name="title" id="titleInput" />
    <label for="yearInput">Year</label>
    <input type="number" name="year" id="yearInput" />
    <button type="submit">Add</button>
  </form>
)
