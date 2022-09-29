import { useSelector } from 'react-redux';
import { OrderDetailsStatus, OrderDetailsTable } from '../../components';
import store from '../../store';
import { fetchLoaderOrderDetails } from '../../store/actions';
import { getTotalPriceOrderDetails } from '../../store/order/order.slice';
import '../../styles/OrderDetailsPage.css';

export async function loaderOderDetails({ params }) {
  const { payload } = await store.dispatch(fetchLoaderOrderDetails(params.id));
  return payload;
}

function OrderDetailsPage() {
  const totalOrderPrice = useSelector(getTotalPriceOrderDetails);

  return (
    <div className="orderDetailsPage">
      <h1 className="orderDetailsTitle">Detalhes do Pedido</h1>
      <OrderDetailsStatus />
      <OrderDetailsTable />
      <span
        className="cartButton"
        data-testid="customer_order_details__element-order-total-price"
      >
        Total: R$:
        {Number(totalOrderPrice).toFixed(2)}
      </span>
    </div>
  );
}

export default OrderDetailsPage;
