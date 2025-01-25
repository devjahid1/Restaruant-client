import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router'




createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className=''>
  <RouterProvider router={router} />
  </div>
</React.StrictMode>
)
