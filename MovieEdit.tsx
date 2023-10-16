import * as elements from "typed-html"

export default ({ title, year, id }: any) => (
  <li>
    <form hx-put={`/movies/${id}`} hx-target="closest li" hx-swap="outerHTML">
      <label>Title</label>
      <input type="text" name="title" value={title} />

      <label>Year</label>

      <input type="number" name="year" value={year} />
      <button type="submit">Update</button>
      <button
        hx-get={`/movies/${id}`}
        hx-target="closest li"
        hx-swap="outerHTML"
      >
        Cancel
      </button>
    </form>
  </li>
)
