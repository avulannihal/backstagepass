import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './theme/ThemeProvider.tsx'
import { ThemeToggle } from './components/utils/ThemeToggle.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider>
      <App />
      <ThemeToggle />
    </ThemeProvider>
  </React.StrictMode>,
)
