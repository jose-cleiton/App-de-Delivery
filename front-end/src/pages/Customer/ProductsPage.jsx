import { useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cart from '../../components/Cart';
import store from '../../store';
import { fetchLoaderAllProducts } from '../../store/actions';
import ProductList from '../../components/ProductList';
import { utualizarCarrinho } from '../../store/carrinho/carrinho.slice';

export async function loaderProductsPage() {
  const { payload } = await store.dispatch(fetchLoaderAllProducts());
  return payload;
}

function ProductsPage() {
  const dispatch = useDispatch();
  const products = useLoaderData();
  const carrinho = JSON.parse(localStorage.getItem('carrinho'));
  if (!carrinho || carrinho.length === 0) {
    const cart = products.map((e) => ({ ...e, quantity: 0 }));
    dispatch(utualizarCarrinho(cart));
  } else {
    dispatch(utualizarCarrinho(carrinho));
  }
  return (
    <div>
      <h1>ProductsPage</h1>
      <ProductList products={ products } />
      <Cart />
    </div>
  );
}

export default ProductsPage;
