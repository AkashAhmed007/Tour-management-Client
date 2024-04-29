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
import UpdateSpot from './Components/UpdateSpot.jsx';

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
      loader :()=>fetch('https://tourism-management-server-alpha.vercel.app/addspot')
     },
     {
      path:'/addspot/:id',
      element: <ProtectedRoute><ViewDetails></ViewDetails></ProtectedRoute>,
      loader:({params})=>fetch(`https://tourism-management-server-alpha.vercel.app/addspot/${params.id}`)
     },
     {
      path:'/addSpot',
      element:<ProtectedRoute><AddSpot></AddSpot></ProtectedRoute>,
     },
     {
      path:'/myList',
      element: <ProtectedRoute><MyList></MyList></ProtectedRoute>,
      loader :()=>fetch('https://tourism-management-server-alpha.vercel.app/addspot')
     },
     { 
      path:'/updatespot',
      element:<UpdateSpot></UpdateSpot>,
      loader: ()=>fetch('https://tourism-management-server-alpha.vercel.app/updatespot')
     },
     {
      path:'/updatespot/:id',
      element:<UpdateSpot></UpdateSpot>,
      loader:({params})=>fetch(`https://tourism-management-server-alpha.vercel.app/updatespot/${params.id}`)
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
