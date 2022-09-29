import { useLoaderData, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const user = useSelector(getUser);
  if (user.role === 'seller') navigate('/seller/order');
  return (
    <div>
      <ProductList products={ products } />
      <Cart />
    </div>
  );
}

export default ProductsPage;
