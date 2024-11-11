import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Enroll",
    element: <h1>Enroll</h1>
  },
  {
    path: "/Login",
    element: <h1>Login</h1>
  },
  {
    path: "*",
    element: <h1>UNKNOWN!</h1>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
