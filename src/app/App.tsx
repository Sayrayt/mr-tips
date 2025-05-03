import '@app/styles/index.scss';
import { RouterProvider } from "react-router-dom";
import React from 'react';

import Router from '@app/provider/Router';

const App: React.FC = () => {
  return <RouterProvider router={Router} />;
}

export default App;
