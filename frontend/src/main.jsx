import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/lara-light-indigo/theme.css' // theme
// import 'primeflex/primeflex.css' // css utility
// import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.css'

import App from './App.jsx'
import './index.css'
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </Provider>
  </React.StrictMode>,
)

export const BACKEND_URL = 'http://localhost:8800/api/v1'
