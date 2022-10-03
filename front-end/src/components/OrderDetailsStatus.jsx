import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { getOrderDetails, updateStatus } from '../store/order/order.slice';
import { getSellers } from '../store/sellers/sellers.slice';
import { api } from '../store';
import '../styles/OrderDetailsStatus.css';

function OrderDetailsStatus() {
  const {
    id,
    saleDate,
    status,
    sellerId,
  } = useSelector(getOrderDetails);
  const sellers = useSelector(getSellers);
  const data = new Date(saleDate);
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    const { value } = e.target;
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
        { sellers.find((item) => item.id === sellerId).name }
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
        onClick={ (e) => {
          handleClick(e);
          const { value } = e.target;
          dispatch(updateStatus(value));
        } }
        type="button"
        disabled={ status !== 'Em Trânsito' }
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );
}

export default OrderDetailsStatus;
