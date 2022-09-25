import { useLoaderData } from 'react-router-dom';

import { ProductCard } from '../../components';
import store from '../../store';
import { fetchLoaderAllProducts } from '../../store/actions';

export async function loaderProductsPage() {
  const { payload } = await store.dispatch(fetchLoaderAllProducts());
  return payload;
}

function ProductsPage() {
  const products = useLoaderData();
  return (
    <div>
      <h1>ProductsPage</h1>
      {products.map((product) => (
        <ProductCard key={ product.id } product={ product } />
      ))}
    </div>
  );
}

export default ProductsPage;
