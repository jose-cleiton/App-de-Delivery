import { useLoaderData } from 'react-router';
import store from '../../store';
import { fetchLoaderSalesBySeller } from '../../store/actions';
import { NavBar } from '../../components';
import OrderStatusSeller from '../../components/OrderStatusSeller';

export async function loaderSalesBySeller() {
  const { payload } = await store.dispatch(fetchLoaderSalesBySeller());
  return payload;
}

function SellerOrders() {
  const salesSeller = useLoaderData();
  console.log(salesSeller);
  return (
    <div>
      Seller Page
      <NavBar />
      <div className="pedidosDiv">
        { salesSeller.map((item) => OrderStatusSeller(item))}
      </div>
    </div>
  );
}

export default SellerOrders;
