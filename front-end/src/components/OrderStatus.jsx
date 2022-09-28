import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

function OrderStatus(order) {
  const { id, status, totalPrice, saleDate, deliveryAddress, deliveryNumber } = order;
  const data = new Date(saleDate);
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={ () => {
        navigate(`/customer/orders/${id}`);
      } }
    >
      <div>
        <p>Pedido</p>
        <span>{id}</span>
      </div>
      <div>
        <p>{status}</p>
      </div>
      <div>
        <span>{moment(data).format('DD/MM/YYYY')}</span>
      </div>
      <div>
        <span>{totalPrice}</span>
      </div>
      <div>
        {`${deliveryAddress}, ${deliveryNumber}`}
      </div>

    </button>

  );
}

export default OrderStatus;
