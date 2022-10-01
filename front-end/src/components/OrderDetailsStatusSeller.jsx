import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { api, getUser, getSellerSales } from '../store';
import { updateStatus } from '../store/order/order.slice';

function OrderDetailsStatusSeller() {
  const { id } = useParams();
  const sales = useSelector(getSellerSales);
  const dispatch = useDispatch();

  const { status, saleDate } = sales.find((item) => item.id === Number(id));
  const handleClick = async (e) => {
    const { value } = e.target;
    await api.patch(`/orders/${id}?status=${value}`);
  };
  const seller = useSelector(getUser);
  const data = new Date(saleDate);

  return (
    <div className="orderDetailStatusHeader">
      <span
        className="nPedido"
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        {`PEDIDO: ${id}`}
      </span>

      <span
        data-testid="seller_order_details__element-order-details-label-seller-name"
        className="orderDetailsSeller"
      >
        P.Vend:
        { seller.name}
      </span>

      <span
        data-testid="seller_order_details__element-order-details-label-order-date"
        className="orderDetailDate"
      >
        {moment(data).format('DD/MM/YYYY')}
      </span>

      <span
        data-testid="seller_order_details__element-order-details-label-delivery-status"
        className="orderDetailsStatus"
      >
        <div>
          {status}
        </div>
      </span>
      <button
        data-testid="seller_order_details__button-preparing-check"
        className="orderDetaisButton"
        value="Preparando"
        onClick={ async (e) => {
          await handleClick(e);
          const { value } = e.target;
          dispatch(updateStatus(value));
        } }
        type="button"
      >
        PREPARAR PEDIDO
      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
        className="orderDetaisButton"
        value="Em Trânsito"
        // disabled={  }
        onClick={ async (e) => {
          await handleClick(e);
          dispatch(updateStatus(e.target.value));
        } }
        type="button"
      >
        SAIU PARA ENTREGA
      </button>
    </div>
  );
}

export default OrderDetailsStatusSeller;
