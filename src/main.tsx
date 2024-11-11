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
    <div className="bg-blue-400 flex h-[3rem]">
        <div className="flex my-auto ml-1">
          <h1 className="ml-1 text-2xl text-white">FEAPITSAT (THIS IS IN FUCKING PROGRESS)</h1>
        </div>


        <div className="ml-auto my-auto flex text-2xl">
          <a href="/" className="mx-2 font-light text-white">Home</a>
          <a href="/Login" className="mx-2 font-light text-white">Login</a>
          <a href="/Enroll" className="mx-2 font-light text-white">Enroll</a>
          

        </div>
      </div>
    <RouterProvider router={router}/>
  </StrictMode>,
)
