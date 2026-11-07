import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CompanyPage from './pages/CompanyPage'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CompanyPage />
  </StrictMode>,
)
