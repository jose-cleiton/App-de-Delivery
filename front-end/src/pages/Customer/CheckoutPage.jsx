import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
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
  const [bool, setBool] = useState(true);
  useEffect(() => {}, [bool]);
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
            <tr key={ index }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }

              >
                { index + 1 }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-name-${index}`
                }
              >
                { data.name }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
              >
                { data.quantity }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                { Number(data.price).toFixed(2) }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index + 1}`
                }
              >
                { Number(data.price * data.quantity).toFixed(2) }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-remove-${index}`
                }
              >
                <button
                  type="button"
                  onClick={ () => {
                    const updatedCart = removeProduct(productsCart, data.id);
                    console.log('chegou');
                    dispatch(utualizarCarrinho(updatedCart));
                    setBool(!bool);
                  } }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        data-testid="customer_checkout__element-order-total-price"
      >
        { Number(total).toFixed(2) }
      </div>
    </div>
  );
}

export default CheckoutPage;
