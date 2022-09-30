import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import '../styles/OrderStatus.css';

function OrderStatusSeller(order) {
  const { id, status, totalPrice, saleDate, deliveryAddress, deliveryNumber } = order;
  const data = new Date(saleDate);
  const navigate = useNavigate();
  return (
    <button
      className="pedido"
      type="button"
      onClick={ () => {
        navigate(`${id}`);
      } }
    >
      <div className="numeroPedido">
        <p>Pedido</p>
        <span
          data-testid={ `seller_orders__element-order-id-${id}` }
        >
          {id}

        </span>
      </div>
      <div className="rightPedidos">
        <div className="upperPedido">
          <p
            className="statusPedidoNome"
            data-testid={ `seller_orders__element-delivery-status-${id}` }
          >
            {status}

          </p>
          <div className="pedidoLateral">
            <span
              className="dataPedido"
              data-testid={ `seller_orders__element-order-date-${id}` }
            >
              {moment(data).format('DD/MM/YYYY')}

            </span>
            <span
              className="precoPedido"
              data-testid={ `seller_orders__element-card-price-${id}` }
            >
              {totalPrice.replace('.', ',')}

            </span>
          </div>
        </div>
        <div className="downPedido">
          <div
            data-testid={ `seller_orders__element-card-address-${id}` }
          >
            {`${deliveryAddress}, ${deliveryNumber}`}
          </div>

        </div>
      </div>

    </button>

  );
}

export default OrderStatusSeller;
