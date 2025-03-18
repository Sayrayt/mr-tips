import '@app/styles/index.scss'
import { RouterProvider } from "react-router-dom";

import Router from '@app/provider/Router'


import { JSX } from '@emotion/react/jsx-runtime';

function App(): JSX.Element {
  return (
    <RouterProvider router={Router} />
  )
}

export default App
