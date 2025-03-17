import '@app/styles/index.scss'

import { Menu } from '@pages/menu'

import { JSX } from '@emotion/react/jsx-runtime';

function App(): JSX.Element {
  return (
    <>
      <div className="app">
        <Menu />
      </div>

    </>
  )
}

export default App
