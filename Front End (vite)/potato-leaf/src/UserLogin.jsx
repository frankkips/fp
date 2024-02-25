// Code for UserLogin page
import userIcon from '/user-icon.png'
import tractorIcon from '/vector.png'
import './App.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function UserLogin(){

    const [isRegistering, setIsRegistering] = useState(false);

    const handleToggle = () => {
        setIsRegistering(!isRegistering);
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
                    <Link to='/user' className='user-link'>
                        <img src={userIcon} width={50} height={50} alt='logo' className='user-icon'/>
                    </Link>
                </div>
                <div className='info-container'>
                    <div className='result-div'>
                        <div className='login'>
                            <h2>Welcome Back</h2>
                            {/* <h1>Username</h1> */}
                            <input type="text" placeholder='Username'/>
                            {/* <h1>Password</h1> */}
                            <input type= "password" placeholder='Password'/>
                            {isRegistering && (
                                <>
                                {/* <h1>Email</h1> */}
                                <input type="email" placeholder='Email'/>
                                {/* <h1>Location</h1> */}
                                <input type="text" placeholder='Location'/>
                                </>
                            )}
                            <button>{isRegistering ? 'Register' : 'Login'}</button>
                            <p onClick={handleToggle}>{isRegistering ? 'Already have an account? Login' : 'dont have an account?Register'}</p>

                        </div>
                    </div>
                    
                </div>
            
            </div>
        </div>
        </>
    )
}
export default UserLogin