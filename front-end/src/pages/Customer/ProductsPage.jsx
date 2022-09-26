import { useLoaderData } from 'react-router-dom';
import Cart from '../../components/Cart';
import store from '../../store';
import { fetchLoaderAllProducts } from '../../store/actions';
import { ProductList } from '../../components';

export async function loaderProductsPage() {
  const { payload } = await store.dispatch(fetchLoaderAllProducts());
  return payload;
}

function ProductsPage() {
  const products = useLoaderData();
  return (
    <div>
      <h1>ProductsPage</h1>
      <Cart />
      <ProductList products={ products } />
    </div>
  );
}

export default ProductsPage;
