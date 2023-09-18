import * as elements from "typed-html"

export default ({ title, year, id }: any) => (
  <li>
    <span>{title}</span>
    <span>({year})</span>
    <button
      hx-delete={`/movies/${id}`}
      hx-target="closest li"
      hx-swap="outerHTML"
    >
      {id}
    </button>
  </li>
)
