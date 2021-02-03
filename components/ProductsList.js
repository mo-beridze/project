import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
const PRODUCTS_PER_PAGE = 10;
export const ProductsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  const fetchProducts = async () => {
      setLoading(true);
      const result = await fetch("https://raw.githubusercontent.com/traa/apiplp/master/db.json");
      result.json().then(data => setProducts(data.pageItems));
      setLoading(false)
  }
  
  useEffect(() => {
    fetchProducts();
  }, [])

  return <>
    <ul>{products.map(product => <li key={product.code}><ProductCard product={product} loading={loading} /></li>
    )}</ul>
  </>
}
