import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Layout from './Layout.jsx'
import ViewTodo from './components/ViewTodo.jsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/add-task',
        element: <AddTodo />
      },
      {
        path: '/view-tasks',
        element: <ViewTodo />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
