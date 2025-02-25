import './App.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

function UserLogin(){
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const [majibu, setMajibu] = useState()

    axios.defaults.withCredentials = true

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://https://kips-mongodb.onrender.com/login',{name, password})
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
                <Header/>
                <div className='info-container'>
                    <div className='result-div'>
                        <div className='login'>
                            <h2>Welcome Back</h2>
                            <p className='majibu'>{majibu}</p>
                            <input type="text" placeholder='Username' onChange={(e)=> setName(e.target.value)}/>
                            <input type= "password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
                            <button className='button-btn' onClick={handleSubmit}>Login</button>
                            <p onClick={handleToggle}>dont have an account?Register</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default UserLogin