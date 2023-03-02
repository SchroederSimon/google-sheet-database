import Papa from "papaparse";
import { useEffect, useState } from "react";
import api, { Products } from "./api";
import './App.css'


function App(): JSX.Element {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const parsedProducts = await api.products.fetch();
      setProducts(parsedProducts);
    }
    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="cards-container">
        {
          products.map((product, index) => (
            <div className="cards"
              key={product.code}
            >
              <div className="card-information">
                <img src={product.image} alt={product.alt} />
                <h1>{product.name}</h1>
                <h2>{product.price}</h2>
                <p>{product.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;