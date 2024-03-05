import Home from './Home'
import Chatgpt from './Chatgpt'
import Learn from './Learn'
import './App.css'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import UserProfile from './UserProfile'
import UserLogin from './UserLogin'
import UserHistory from './UserHistory'
import EditProfile from './EditProfile'
import UserRegister from './UserRegister'


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
    element: <UserProfile/>,
  },
  {
    path: '/user/profile',
    element: <UserProfile/>,
  },
  {
    path: 'user/history',
    element: <UserHistory/>,
    },
    {
      path: 'user/login',
      element: <UserLogin/>,
    },
    {
      path: 'user/register',
      element: <UserRegister/>,
    },
    {
      path: 'user/edit-profile',
      element: <EditProfile/>,
    },
  ])

  return (
    
    <RouterProvider router={router}/>
    
  )
}

export default App
