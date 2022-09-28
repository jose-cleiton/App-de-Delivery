import React from 'react';
import { useSelector } from 'react-redux';

import { getOrderDetails } from '../store/order/order.slice';

function OrderDetailsStatus() {
  const {
    id,
    saleDate,
    status,
  } = useSelector(getOrderDetails);

  return (
    <div>
      <span data-testid="customer_order_details__element-order-details-label-order-id">
        {`PEDIDO: ${id}`}
      </span>

      <span data-testid="customer_order_details__element-order-details-label-seller-name">
        P.Vend:
        {/* {sellerName} */}
      </span>

      <span data-testid="customer_order_details__element-order-details-label-order-date">
        {saleDate}
      </span>

      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        <div>
          { status }
        </div>
      </span>
      <button
        data-testid="customer_order_details__button-delivery-check"
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
