import { Outlet } from 'react-router-dom';

function CustomerPage() {
  return (
    <div>
      <h1>Customer</h1>
      <Outlet />
    </div>
  );
}

export default CustomerPage;
