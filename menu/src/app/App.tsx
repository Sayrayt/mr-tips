import '@app/styles/index.scss'
import { RouterProvider } from "react-router-dom";
import { Suspense } from 'react';
import Loading from '@pages/loading/Loading';

import Router from '@app/provider/Router'


import { JSX } from '@emotion/react/jsx-runtime';

function App(): JSX.Element {
  return (
    <Suspense  fallback={<Loading />}>
      <RouterProvider  router={Router} />
    </Suspense>

  )
}

export default App
