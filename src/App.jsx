import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact'
import NotFound from './Components/NotFound';

export default function App() {

  let routes = createBrowserRouter([
    {path:'/', element:<Layout></Layout>, children: [
      {index:true,element:<Home></Home>},
      {path:'/about', element:<About></About>},
      {path:'/portfolio', element:<Portfolio></Portfolio>},
      {path:'/contact', element:<Contact></Contact>},
      {path:'*', element: <NotFound></NotFound>}
    ]}
  ])

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}
