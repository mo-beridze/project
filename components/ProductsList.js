import { ProductCard } from "./ProductCard";
import { Loader } from "./Loader";

export const ProductsList = ({ choosedProducts, loading}) =>
  <> 
     { choosedProducts.length > 0 ? (<ul>
        {
        choosedProducts.map(product =>
          <li key={product.code}>
            <ProductCard product={product} />
          </li>)
        }
    </ul>) : <div>Sorry, we've not found this product...</div> }
  </>
