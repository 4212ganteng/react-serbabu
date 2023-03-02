import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import { store } from './utils/redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Ini buat inisiasi redux toolkit ya
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>
)
