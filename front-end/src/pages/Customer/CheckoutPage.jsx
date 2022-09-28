import { useDispatch, useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { removeProduct, obterCarrinho, obterValorTotal }
  from '../../store/carrinho/carrinho.slice';
import store from '../../store';
import { fetchLoaderAllSellers } from '../../store/actions';

export async function loaderSellersPage() {
  const { payload } = await store.dispatch(fetchLoaderAllSellers());
  return payload;
}

function CheckoutPage() {
  const sellers = useLoaderData();
  const dispatch = useDispatch();
  const cart = useSelector(obterCarrinho);
  const total = useSelector(obterValorTotal);
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
                    dispatch(removeProduct(data.id));
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
        { Number(total).toFixed(2).replace('.', ',')}
      </div>
    </div>
  );
}

export default CheckoutPage;
