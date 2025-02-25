import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css'



function DropDown() {
    const [user, setUser] = useState(null);
    axios.defaults.withCredentials = true;

    // Check Session for userlogin
    useEffect(() => {
        axios.get('https://kips-mongodb.onrender.com/')
            .then(res => {
            if (res.data.valid === true){
                setUser(res.data.username);
            }else{
                setUser(null);
            }
            })
            .catch(err => {
            console.log(err);
            });
    }, [user]);

    const handleLogout = () => {
        axios.post('https://kips-mongodb.onrender.com/logout')
            .then(() =>{
            setUser(null); // Clear user state on successful logout
            })
            .catch(err => {
            console.log(err);
            });
    };
    return (
    <div className='dropdown'>
        <ul>
            <li className='mobmenu'><Link to="/">Home</Link></li>
            <li className='mobmenu'><Link to="/chat">Chat</Link></li>
            <li className='mobmenu'><Link to="/learn">Learn</Link></li>
            
            {user &&
            <>
                <li><Link to="/user">Profile</Link></li>
                <li className='mobmenu'><Link to="/user/history">History</Link></li>
            </>
                }
            {!user &&
                <>
                <li><Link to="/user/login">Login</Link></li>
                <li><Link to="/user/register">Register</Link></li></>}
            {user &&
                <li onClick={handleLogout}><Link to="/user/login">Logout</Link></li>}
        </ul>
    </div>
    );
}

export default DropDown;