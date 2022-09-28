import { useDispatch, useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { removeProduct, obterCarrinho, obterValorTotal }
  from '../../store/carrinho/carrinho.slice';
import store from '../../store';
import { fetchLoaderAllSellers } from '../../store/actions';
import '../../styles/CheckoutPage.css';

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
    <div className="checkoutPage">
      <table>
        <caption>Finalizar Pedido</caption>
        <thead>
          <tr>
            <th className="testando">
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
          {cart.map((data, index) => (
            <tr key={ index }>
              <td
                className="checkoutItem"
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }

              >
                {index + 1}
              </td>
              <td
                className="checkoutProduct"
                data-testid={
                  `customer_checkout__element-order-table-name-${index}`
                }
              >
                {data.name}
              </td>
              <td
                className="checkoutQuantity"
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
              >
                {data.quantity}
              </td>
              <td
                className="checkoutUnitPrice"
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {Number(data.price).toFixed(2)}
              </td>
              <td
                className="checkoutSubTotal"
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index + 1}`
                }
              >
                {Number(data.price * data.quantity).toFixed(2)}
              </td>
              <button
                className="checkoutRemoveButton"
                data-testid={
                  `customer_checkout__element-order-table-remove-${index}`
                }
                type="button"
                onClick={ () => {
                  dispatch(removeProduct(data.id));
                } }
              >
                Remover
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="checkoutTotalDiv">
        <p className="checkoutTotal">Valor Total:</p>
        <div
          className="checkoutTotal"
          data-testid="customer_checkout__element-order-total-price"
        >
          {Number(total).toFixed(2).replace('.', ',')}
        </div>
      </div>
      <h1>Detalhes e Endereço para Entrega</h1>
      <form action="submit" method="post">
        <div className="formInputs">
          <label htmlFor="seller">
            P. Vendedora Responsável
            <select
              name="seller"
              id="seller"
              data-testid="customer_checkout__select-seller"
            >
              {sellers.map((e) => (
                <option
                  value={ e.name }
                  key={ e.id }
                >
                  {e.name}
                </option>))}
            </select>
          </label>
          <label
            htmlFor="adress"
            className="checkoutAdress"
          >
            Endereço
            <input
              type="text"
              name="adress"
              id="adress"
              placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
              data-testid="customer_checkout__input-address"
            />
          </label>
          <label
            htmlFor="number"
            className="checkoutNumber"
          >
            Número
            <input
              type="text"
              name="number"
              id="number"
              placeholder="198"
              data-testid="customer_checkout__input-address-number"
            />
          </label>

        </div>
        <div className="sendButtonDiv">
          <button
            className="checkoutSendButton"
            type="submit"
            data-testid="customer_checkout__button-submit-order"
          >
            FINALIZAR PEDIDO
          </button>

        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
