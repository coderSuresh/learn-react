import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './App.css'
import AddTodo from './pages/AddTodo'
import Layout from './Layout.jsx'
import ViewTodo from './pages/ViewTodo'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
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
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
