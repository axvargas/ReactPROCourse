import { useState } from 'react'
import './App.css'
import { ProductCard, ProductImage, ProductTitle, ProductButtons, 
  Product } from 'axvv-product-card';

function App() {
  const [product, setProduct] = useState<Product>({
    id: "1",
    title: 'Product Title',
    img: './coffee-mug.png'
})

  return (
    <div className="App">
      <ProductCard
        product={product}
        initialValues={{
          quantity: 4,
          // maxQuantity: 10
        }}
      >
        {
          ({ reset, count, maxCount, isMaxCountReached, increaseBy }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>
    </div>
  )
}

export default App
