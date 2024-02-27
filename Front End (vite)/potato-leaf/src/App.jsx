// import { useState } from 'react'
import Home from './Home'
// import Reccomend from './Recomend'
// import Reccomend from './Recomend'
import Chatgpt from './Chatgpt'
import Learn from './Learn'
// import Result from './Result'
import './App.css'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
// import UserProfile from './UserProfile'
// import UserLogin from './UserLogin'
import UserHistory from './UserHistory'


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
  {
    path: '/learn',
    element: <Learn/>,
  },
  {
    path: '/user',
    element: <UserHistory/>,
  },
  ])

  return (
    
    <RouterProvider router={router}/>
    
  )
}

export default App
