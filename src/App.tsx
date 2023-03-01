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
    <div>
      <h1>Products</h1>

      {
        products.map((product, index) => (
          <div key={index}>
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
          </div>
        ))
      }

    </div>
  );
}

export default App;