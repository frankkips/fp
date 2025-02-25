// Code for UserRegister page
import './App.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from './Header'


function UserRegister(){
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [location, setLocation] = useState()
    const navigate = useNavigate()
    const [word, setWord] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://https://kips-mongodb.onrender.com/register',{name, password, email, location})
        .then(result => {
            console.log(result)
            if (result.status == 400){
                console.log("Wrong Username")
            }else{
                navigate('/user/login')
            }
        
        })
        
        .catch(err => {
            console.log(err)
            setWord("Username Already Exist")
            }
        
        )
    }


    const handleToggle = () => {
        navigate('/user/login')
    };

    return(
        <>
            <div className='container'>
            <div className='centered-container'>
                <Header/>
                <div className='info-container'>
                    <div className='result-div'>
                        <div className='login'>
                            <h2>Welcome</h2>
                            <p>{word}</p>
                            <input type="text" placeholder='Username' onChange={(e)=> setName(e.target.value)}/>
                            <input type= "password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
                            <input type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
                            <input type="text" placeholder='Location' onChange={(e)=> setLocation(e.target.value)}/>
                            <button className='button-btn' onClick={handleSubmit}>Register</button>
                            <p onClick={handleToggle}>Already have an account?Login</p>
                        </div>
                    </div>
                    
                </div>
            
            </div>
        </div>
        </>
    )
}
export default UserRegister