import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { getOrderDetails } from '../store/order/order.slice';
import { getSellers } from '../store/sellers/sellers.slice';
import { api } from '../store';
import '../styles/OrderDetailsStatus.css';

function OrderDetailsStatus() {
  const {
    id,
    saleDate,
    status,

  } = useSelector(getOrderDetails);
  const sellers = useSelector(getSellers);
  console.log(sellers);
  const data = new Date(saleDate);
  const handleClick = async (e) => {
    const { value } = e.target;
    console.log(value);
    await api.patch(`/orders/${id}?status=${value}`);
  };

  return (
    <div className="orderDetailStatusHeader">
      <span
        className="nPedido"
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {`PEDIDO: ${id}`}
      </span>

      <span
        data-testid="customer_order_details__element-order-details-label-seller-name"
        className="orderDetailsSeller"
      >
        P.Vend:
        { /* sellers.find((item) => item.id === sellerId).name */}
      </span>

      <span
        data-testid="customer_order_details__element-order-details-label-order-date"
        className="orderDetailDate"
      >
        {moment(data).format('DD/MM/YYYY')}
      </span>

      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
        className="orderDetailsStatus"
      >
        <div>
          {status}
        </div>
      </span>
      <button
        data-testid="customer_order_details__button-delivery-check"
        className="orderDetaisButton"
        value="Entregue"
        onClick={ (e) => handleClick(e) }
        type="button"
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );
}

export default OrderDetailsStatus;
