import { useLoaderData, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cart from '../../components/Cart';
import ProductList from '../../components/ProductList';
import store, { getUser } from '../../store';
import { fetchLoaderAllProducts } from '../../store/actions';

export async function loaderProductsPage() {
  const { payload } = await store.dispatch(fetchLoaderAllProducts());
  return payload;
}

function ProductsPage() {
  const products = useLoaderData() || [];
  const user = useSelector(getUser);
  if (user.role === 'seller') return <Navigate replace to="/seller/orders" />;
  if (user.role === 'administrator') return <Navigate replace to="/admin/manage" />;
  return (
    <div>
      <ProductList products={ products } />
      <Cart />
    </div>
  );
}

export default ProductsPage;
