import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import '../styles/OrderStatus.css';

function OrderStatus(order) {
  const { id, status, totalPrice, saleDate, deliveryAddress, deliveryNumber } = order;
  const data = new Date(saleDate);
  const navigate = useNavigate();

  return (
    <button
      className="pedido"
      type="button"
      onClick={ () => {
        navigate(`/customer/orders/${id}`);
      } }
    >
      <div className="numeroPedido">
        <p>Pedido</p>
        <span>{id}</span>
      </div>
      <div className="rightPedidos">
        <div className="upperPedido">
          <p className="statusPedidoNome">{status}</p>
          <div className="pedidoLateral">
            <span className="dataPedido">{moment(data).format('DD/MM/YYYY')}</span>
            <span className="precoPedido">{totalPrice}</span>
          </div>
        </div>
        <div className="downPedido">
          <div>
            {`${deliveryAddress}, ${deliveryNumber}`}
          </div>

        </div>
      </div>

    </button>

  );
}

export default OrderStatus;
