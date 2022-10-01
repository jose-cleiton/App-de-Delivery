import moment from 'moment';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { api, getUser, getSellerSales } from '../store';

function OrderDetailsStatusSeller() {
  const { id } = useParams();
  const sales = useSelector(getSellerSales);
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
        onClick={ (e) => handleClick(e) }
        type="button"
      >
        PREPARAR PEDIDO
      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
        className="orderDetaisButton"
        value="Em Trânsito"
        // disabled={  }
        onClick={ (e) => handleClick(e) }
        type="button"
      >
        SAIU PARA ENTREGA
      </button>
    </div>
  );
}

export default OrderDetailsStatusSeller;
