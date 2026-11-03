import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import About from './components/about.jsx'

const router = createBrowserRouter([
    {
        path:'/',
        element : <Layout/>,
        children : [
            {
                path : '',
                element : <Home/>
            },
            {
                path : 'about',
                element : <About/>
            }
        ]

    }
])
createRoot(document.getElementById('root')).render(
 
   
    <RouterProvider router = {router}/>
   
)
