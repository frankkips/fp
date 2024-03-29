// Code for UserRegister page
import userIcon from '/user-icon.png'
import tractorIcon from '/vector.png'
import './App.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import DropDown from './DropDown'


function UserRegister(){
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [location, setLocation] = useState()
    const navigate = useNavigate()
    const [openMenu, setOpenMenu] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name, password, email, location})
        .then(result => console.log(result))
        navigate('/user/login')
        .catch(err => console.log(err))
    }


    const handleToggle = () => {
        navigate('/user/login')
    };

    return(
        <>
            <div className='container'>
            <div className='centered-container'>
                <div className='header'>
                    <div className='logo-container'>
                        <img src={tractorIcon} width= {47} height={39}alt='logo' className='logo-img'/>
                        <h1 className='logo'>Mkulima</h1>
                    </div>
                        <ul className='list'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/chat">Chat</Link></li>
                            <li><Link to="/learn">Learn</Link></li>
                        </ul>
                        <img onClick={() => setOpenMenu((prev) => !prev)} src={userIcon} width={50} height={50} alt='logo' className='user-icon'/>
                </div>
                <div className='info-container'>
                    <div className='result-div'>
                        <div className='login'>
                            <h2>Welcome</h2>
                            <input type="text" placeholder='Username' onChange={(e)=> setName(e.target.value)}/>
                            <input type= "password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
                            <input type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
                            <input type="text" placeholder='Location' onChange={(e)=> setLocation(e.target.value)}/>
                            <button onClick={handleSubmit}>Register</button>
                            <p onClick={handleToggle}>Already have an account?Login</p>
                        </div>
                    </div>
                    
                </div>
            
            </div>
            {
                openMenu && (
                    <DropDown/>
                )
            }
        </div>
        </>
    )
}
export default UserRegister