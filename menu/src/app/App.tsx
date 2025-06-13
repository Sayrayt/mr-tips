import '@app/styles/index.scss'
import { RouterProvider } from "react-router-dom";
import { Suspense } from 'react';
import Loading from '@pages/loading/Loading';

import Router from '@app/provider/Router'

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={Router} />
    </Suspense>

  )
}

export default App
