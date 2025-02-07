import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router'
import {HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider'


import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
  <div className=''>
  <RouterProvider router={router} />
  </div>
  </HelmetProvider>
    </QueryClientProvider>
    </AuthProvider>

</React.StrictMode>
)
