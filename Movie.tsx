import * as elements from "typed-html"

export default ({ title, year, id }: any) => (
  <li>
    {title} ({year})
    <button
      hx-get={`/movies/${id}/edit`}
      hx-target="closest li"
      hx-swap="outerHTML"
    >
      Edit
    </button>
    <button
      hx-delete={`/movies/${id}`}
      hx-target="closest li"
      hx-swap="outerHTML"
    >
      Delete
    </button>
  </li>
)
