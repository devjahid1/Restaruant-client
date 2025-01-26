import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router'
import {HelmetProvider } from 'react-helmet-async';




createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HelmetProvider>
  <div className=''>
  <RouterProvider router={router} />
  </div>
  </HelmetProvider>
</React.StrictMode>
)
