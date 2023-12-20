import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/lara-light-indigo/theme.css' // theme
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


console.log(import.meta.env)
console.log(import.meta.env['VITE_BACKEND_URL'])

export const BACKEND_URL = import.meta.env['VITE_BACKEND_URL'] || 'http://127.0.0.1:8000'

export async function getOptions(dataFor) {
  const url = `${BACKEND_URL}/${dataFor}/all/`

  try {
    const response = await fetch(url)

    const data = await response.json()

    return data.map((d) => ({
      id: d['id'],
      name: d['name'],
    }))
  } catch (err) {
    console.error(err)
    return []
  }
}
