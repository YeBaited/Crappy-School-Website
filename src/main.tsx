import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Enroll from './Router/Enroll.tsx'
import Login from './Router/Login.tsx'
import AdminPanel from './Router/AdminPanel.tsx'
import MainHome from './Router/MainHome.tsx'

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
    element: <Enroll />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Admin",
    element: <AdminPanel />
  },
  {
    path: "*",
    element: <h1>UNKNOWN!</h1>
  },
  {
    path: "/Home",
    element: <MainHome />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="bg-blue-400 flex h-[3rem] sticky top-0">
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
