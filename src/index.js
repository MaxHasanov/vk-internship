import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { ConfigProvider, AdaptivityProvider } from '@vkontakte/vkui'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ConfigProvider>
        <AdaptivityProvider>
          <App />
        </AdaptivityProvider>
      </ConfigProvider>
    </React.StrictMode>
  </Provider>
)
