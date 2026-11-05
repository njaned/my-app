export function Badge({ text }) {
  return <span className="badge">{text}</span>
}

export function PriceTag({ price }) {
  return <span className="price-tag">${price}</span>
}