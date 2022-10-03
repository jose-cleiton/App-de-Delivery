import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import OrderDetailsStatusSeller from '../../components/OrderDetailsStatusSeller';
import OrderDetailsTableSeller from '../../components/OrdersDetailsTableSeller';
import { getSellerSales } from '../../store';
import NavBar from '../../components/NavBar';

function SellerOrderDetails() {
  const sales = useSelector(getSellerSales);
  const { id } = useParams(); // apagar
  const sale = sales.find((item) => item.id === Number(id)); // apagar
  const totalOrderPrice = sale.salesProducts
    .reduce((acc, curr) => acc + (curr.price * curr.sales_products.quantity), 0);
  return (
    <div>
      <NavBar />
      <OrderDetailsStatusSeller />
      <OrderDetailsTableSeller />
      <span
        className="cartButton"
        data-testid="seller_order_details__element-order-total-price"
      >
        {Number(totalOrderPrice).toFixed(2).replace('.', ',')}
      </span>
    </div>
  );
}

export default SellerOrderDetails;
