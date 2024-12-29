import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Task3/App3.jsx'
import './Task3/App3.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
