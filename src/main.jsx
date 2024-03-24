import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Address from './pages/Address.jsx'


const data = [
  {
    id: 1,
    name: "Michael",
  },
  {
    id: 2,
    name: "Dwight",
  },
];

export const DataContext = createContext([])


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/adress",
        element: <Address />
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContext.Provider value={data}>
        <RouterProvider router={router} />
    </DataContext.Provider>
  </React.StrictMode>,
)
