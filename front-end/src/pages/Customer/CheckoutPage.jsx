import { useDispatch, useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { removeProduct, obterCarrinho, obterValorTotal }
  from '../../store/carrinho/carrinho.slice';
import store, { getUser } from '../../store';
import { fetchLoaderAllSellers } from '../../store/actions';
import ApiClient from '../../api';
import '../../styles/CheckoutPage.css';

export async function loaderSellersPage() {
  const { payload } = await store.dispatch(fetchLoaderAllSellers());
  return payload;
}

function createObj({ userId, sellerId, cart, deliveryAddress, deliveryNumber }) {
  const productList = cart.map((item) => {
    const { id, quantity } = item;
    return {
      id,
      quantity,
    };
  });

  const requestObj = {
    payload: {
      userId,
      sellerId,
      deliveryAddress,
      deliveryNumber,
    },
    productList,
  };

  return requestObj;
}

async function postSale(payload) {
  const api = new ApiClient(store);
  try {
    const response = await api.post('/orders', {
      data: payload,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
}

function CheckoutPage() {
  const navigate = useNavigate();
  const user = useSelector(getUser);
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
                  value={ e.id }
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
            onClick={ async (e) => {
              e.preventDefault();
              const sellerId = document.querySelector('select').value;
              const deliveryAddress = document.querySelector('#adress').value;
              const deliveryNumber = document.querySelector('#number').value;
              const payload = createObj({
                userId: user.id,
                sellerId: Number(sellerId),
                cart,
                deliveryAddress,
                deliveryNumber,
              });
              const response = await postSale(payload);
              navigate(`/customer/orders/${response.id}`);
            } }
          >
            FINALIZAR PEDIDO
          </button>

        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
