import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import { Badge, PriceTag } from './components/UIHelpers'

function App() {
  return (
    <div className="app-container">
      <Header />

      <main>
        <h2>Featured Products</h2>
        
        <div className="special-deal-banner">
          <span>Special Deal:</span>
          <Badge text="HOT" />
          <PriceTag price={299} />
        </div>

        <div className="product-grid">
          <ProductCard title="Wireless Headphones" price={199} isNew={true} />
          <ProductCard title="Mechanical Keyboard" price={89} isNew={false} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App