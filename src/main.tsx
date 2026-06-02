import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './i18n'

console.log(1) // deploy smoke test (확인 후 제거)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
