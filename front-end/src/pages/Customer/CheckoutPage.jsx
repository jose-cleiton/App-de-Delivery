import { useDispatch } from 'react-redux';
import { utualizarCarrinho } from '../../store/carrinho/carrinho.slice';

function removeProduct(cart, productId) {
  const aux = JSON.parse(JSON.stringify(cart));
  const newCart = aux.map((item) => {
    if (item.id === productId) {
      item.quantity = 0;
      return item;
    }
    return item;
  });
  localStorage.setItem('carrinho', JSON.stringify(newCart));
  return newCart;
}

function CheckoutPage() {
  const dispatch = useDispatch();
  const productsCart = JSON.parse(localStorage.getItem('carrinho'));
  dispatch(utualizarCarrinho(productsCart));
  const cart = productsCart.filter((item) => item.quantity > 0);
  const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  return (
    <div>
      <h1>CheckoutPage</h1>
      <table>
        <thead>
          <tr>
            <th>
              Item
            </th>
            <th>
              Descrição
            </th>
            <th>
              Quantidade
            </th>
            <th>
              Valor Unitário
            </th>
            <th>
              Sub-total
            </th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          { cart.map((data, index) => (
            <tr key={ index + 1 }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index + 1}`
                }

              >
                { index + 1 }
              </td>
              <td>
                { data.name }
              </td>
              <td>
                { data.quantity }
              </td>
              <td>
                { Number(data.price).toFixed(2) }
              </td>
              <td>
                { Number(data.price * data.quantity).toFixed(2) }
              </td>
              <td>
                <button
                  type="button"
                  onClick={ () => {
                    const updatedCart = removeProduct(productsCart, data.id);
                    console.log('chegou');
                    dispatch(utualizarCarrinho(updatedCart));
                  } }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        { Number(total).toFixed(2) }
      </div>
    </div>
  );
}

export default CheckoutPage;
