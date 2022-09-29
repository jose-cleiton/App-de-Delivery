import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { getOrderDetails } from '../store/order/order.slice';
import '../styles/OrderDetailsStatus.css';

function OrderDetailsStatus() {
  const {
    id,
    saleDate,
    status,
  } = useSelector(getOrderDetails);
  const data = new Date(saleDate);

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
        {/* {sellerName} */}
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
          {status.toUpperCase() }
        </div>
      </span>
      <button
        data-testid="customer_order_details__button-delivery-check"
        className="orderDetaisButton"
        // disabled={  }
        // onClick={  }
        type="button"
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );
}

export default OrderDetailsStatus;
