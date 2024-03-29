import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import NuevoCliente,{action as nuevoClienteAction} from "./pages/NuevoCliente.jsx";
import Index, {loader as ClientesLoader} from "./pages/Index.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import EditarCliente,{loader as editarClienteLoader, action as editarClienteAction} from "./pages/EditarCliente.jsx";
import {action as eliminarClienteAction} from "./components/Cliente.jsx";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children: [
            {
                index:true,
                element: <Index/>,
                loader: ClientesLoader,
                errorElement: <ErrorPage/>
            },
            {
                path:'/cliente/nuevo',
                element: <NuevoCliente/>,
                action: nuevoClienteAction,
                errorElement: <ErrorPage/>
            },
            {
                path:'/clientes/:clienteId/editar',
                element: <EditarCliente/>,
                loader:editarClienteLoader,
                action: editarClienteAction,
                errorElement: <ErrorPage/>
            },
            {
                path:'/clientes/:clienteId/eliminar',
                action:eliminarClienteAction

            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
