import React from 'react';
import './App.css';
import {createBrowserRouter , Outlet, RouterProvider} from 'react-router-dom'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import Dashboard from './pages/dashboard/Dashboard'
import Categories from './pages/categories/Categories'
import Category from './pages/category/Category'
import Add from './pages/add/Add'
import MyGig from './pages/myGigis/MyGig'
import Messages from './pages/messages/Messages'
import Message from './pages/message/Message'
import Orders from './pages/order/Order'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


function App() {
  const queryClient = new QueryClient()
  const Layout = ()=>{
    return(
      <div className='app'>
      <QueryClientProvider client={queryClient}>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </QueryClientProvider>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Dashboard/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/gigs',
          element:<Categories/>
        },
        {
          path:'/gig/:id',
          element:<Category/>
        },
        {
          path:'/orders',
          element:<Orders/>
        },
        {
          path:'/myGigs',
          element:<MyGig/>
        },
        {
          path:'/add',
          element:<Add/>
        },
        {
          path:'/messages',
          element:<Messages/>
        },
        {
          path:'/message/:id',
          element:<Message/>
        },
      ]
    }
  ])
  return (
    <div className="app">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
