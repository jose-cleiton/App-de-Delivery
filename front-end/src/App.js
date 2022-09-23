import React from 'react';

import { RouterProvider } from 'react-router-dom';
import AppRoutes from './routes/index.route';

function App() {
  return (
    <RouterProvider router={ AppRoutes } />
  );
}

export default App;
