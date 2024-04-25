import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Root/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import AllSpot from './Pages/AllSpot.jsx';
import AddSpot from './Pages/AddSpot.jsx';
import MyList from './Pages/MyList.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';

const router = createBrowserRouter ([
    {
    path:'/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
     { path:'/',
      element: <Home></Home>
     },
     {
      path:'/allSpot',
      element: <AllSpot></AllSpot>
     },
     {
      path:'/addSpot',
      element:<AddSpot></AddSpot>
     },
     {
      path:'myList',
      element: <MyList></MyList>
     },
     {
      path:'/login',
      element:<Login></Login>
     },
     {
      path:'/register',
      element:<Register></Register>
     }
  ]
  }
])
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
