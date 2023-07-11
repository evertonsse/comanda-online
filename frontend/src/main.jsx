import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Logon from './pages/Logon/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Logon />,
   
    children: [
      {
        path: "team",
        element: <Logon />,
        
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
