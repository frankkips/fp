import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

function DropDown() {
    const [user, setUser] = useState(null);
    axios.defaults.withCredentials = true;

    // Check Session for userlogin
    useEffect(() => {
        axios.get('http://localhost:3001/')
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
        axios.post('http://localhost:3001/logout')
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
            {user &&
                <li><Link to="/user">Profile</Link></li>}
            {!user &&
                <>
                <li><Link to="/user/login">Login</Link></li>
                <li><Link to="/user/register">Register</Link></li></>}
            {user &&
                <li onClick={handleLogout}><Link to="/user/login">Logout</Link></li>}
            {/* <li onClick={handleLogout}>Logout</li> */}
        </ul>
    </div>
    );
}

export default DropDown;