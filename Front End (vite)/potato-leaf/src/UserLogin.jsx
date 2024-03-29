import userIcon from '/user-icon.png'
import tractorIcon from '/vector.png'
import './App.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import DropDown from './DropDown'



function UserLogin(){
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const [majibu, setMajibu] = useState()
    const [openMenu, setOpenMenu] = useState(false)
    console.log(majibu)


    axios.defaults.withCredentials = true

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login',{name, password})
        .then(result => {
            console.log(result)
            setMajibu(result.data)
            if (result.data.Login === true){

                navigate('/user', {state: {name: name}})
            }
        })
        
        .catch(err => console.log(err))
    }


    const handleToggle = () => {
        navigate('/user/register')
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
                            <h2>Welcome Back</h2>
                            <p className='majibu'>{majibu}</p>
                            <input type="text" placeholder='Username' onChange={(e)=> setName(e.target.value)}/>
                            <input type= "password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
                            <button onClick={handleSubmit}>Login</button>
                            <p onClick={handleToggle}>dont have an account?Register</p>
                        </div>
                    </div>
                    
                </div>
            
                {
                openMenu && (
                    <DropDown/>
                )
            }
            </div>
        </div>
        </>
    )
}
export default UserLogin