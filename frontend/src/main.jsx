import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import Logon from './pages/logon'
import Home from './pages/home'
import CreateUser from './pages/user/createUser'

const router = createBrowserRouter([{
  path: '/',
  element: <Logon />
  },
  {
  path: '/home',
  element: <Home />
  }, {

    path: '/user/create',
    element: <CreateUser />
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
