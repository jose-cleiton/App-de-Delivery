import { Outlet } from 'react-router-dom';

import { NavBar } from '../../components';

function CustomerPage() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default CustomerPage;
