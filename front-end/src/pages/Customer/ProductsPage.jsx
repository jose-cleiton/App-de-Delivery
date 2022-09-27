import { useLoaderData } from 'react-router-dom';
import Cart from '../../components/Cart';
import store from '../../store';
import { fetchLoaderAllProducts } from '../../store/actions';
import { ProductList } from '../../components';
import { utualizarCarrinho } from '../../store/carrinho/carrinho.slice';

export async function loaderProductsPage() {
  const { payload } = await store.dispatch(fetchLoaderAllProducts());
  const carrinho = await JSON.parse(localStorage.getItem('carrinho'));
  if (!carrinho || carrinho.length === 0) {
    const cart = await payload.map((e) => ({ ...e, quantity: 0 }));
    store.dispatch(utualizarCarrinho(cart));
  }
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
