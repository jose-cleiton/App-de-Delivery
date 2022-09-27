import { useLoaderData } from 'react-router-dom';

import Cart from '../../components/Cart';
import ProductList from '../../components/ProductList';
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
      <ProductList products={ products } />
      <Cart />
    </div>
  );
}

export default ProductsPage;
