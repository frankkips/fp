// import { useState } from 'react'
import Home from './Home'
// import Reccomend from './Recomend'
// import Reccomend from './Recomend'
import Chatgpt from './Chatgpt'
// import Result from './Result'
import './App.css'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'


function App() {

  

  const router = createBrowserRouter([{
    path: '/',
    element: <Home/>,
    errorElement: <div className='err'>Ooops! 404 Not Found <Link to='/' className='return'>Return Home</Link></div>,
  },
  {
    path: '/chat',
    element: <Chatgpt/>,
  },
  ])

  return (
    
    <RouterProvider router={router}/>
    
  )
}

export default App
