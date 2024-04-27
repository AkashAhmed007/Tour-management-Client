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
import FirebaseProvider from './Firebase/FirebaseProvider/FirebaseProvider.jsx';
import ViewDetails from './Components/ViewDetails.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';

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
      element: <AllSpot></AllSpot>,
      loader :()=>fetch('http://localhost:5000/addspot')
     },
     {
      path:'/addspot/:id',
      element: <ProtectedRoute><ViewDetails></ViewDetails></ProtectedRoute>,
      loader:({params})=>fetch(`http://localhost:5000/addspot/${params.id}`)
     },
     {
      path:'/addSpot',
      element:<ProtectedRoute><AddSpot></AddSpot></ProtectedRoute>,
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
    <FirebaseProvider><RouterProvider router={router}></RouterProvider></FirebaseProvider>
  </React.StrictMode>,
)
