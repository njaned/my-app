import { Badge, PriceTag } from './UIHelpers'

function ProductCard({ title, price, isNew }) {
  return (
    <div className="product-card">
      <div>
        {isNew && <Badge text="NEW" />}
        <h3>{title}</h3>
      </div>
      <PriceTag price={price} />
    </div>
  )
}

export default ProductCard