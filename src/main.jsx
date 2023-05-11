import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Index from './pages'
import { loader as LoaderData } from './pages'
import { loader as LoaderDataPais } from './pages/PaisInfo'
import PaisInfo from './pages/PaisInfo'


const routes = createBrowserRouter([
  {
    element: <Layout />,
    children:[
      {
        index:true,
        path: '/',
        element: <Index />,
        loader:LoaderData
      },
      {
        path:'/pais/:paisName',
        element:<PaisInfo />,
        loader:LoaderDataPais
      }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={routes}/>
  </React.StrictMode>,
)
