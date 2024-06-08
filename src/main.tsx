import React from 'react'
import ReactDOM from 'react-dom/client'
import './meu-app.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './components/auth-context'

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider>
      
        <RouterProvider router={router} />
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>,
)
