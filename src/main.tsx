import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import { userDetailsStore } from './services';
import App from '@App/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={userDetailsStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
