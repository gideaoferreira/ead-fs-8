import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './assets/css/main.css'
import 'bootstrap'
import Layout from './Layout'
import HomePage from './pages/home/HomePage'
import ContactPage from './pages/contact/ContactPage'
import ProductDetailsPage from './pages/product/details/ProductDetailsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'product-detail/:id',
        element: <ProductDetailsPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
