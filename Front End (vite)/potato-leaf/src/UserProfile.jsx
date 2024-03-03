import userIcon from '/user-icon.png'
// import { useState, useEffect } from 'react'
import tractorIcon from '/vector.png'
import './App.css'
import { Link } from 'react-router-dom'
// import UserHistory from './UserHistory';
import data from './data.json'
import { useNavigate } from 'react-router-dom'






function UserProfile() {
    const navigate = useNavigate()
    const clickProfile = () => {
        navigate('/user/edit-profile')
    }
    const handleClick = () => {
        navigate('/user/history')
    };

    return (
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
                        <div className='user-show'>
                            <div className="user-cover"></div>
                            <div className="user-pic">
                            <img src={userIcon} width={150} height={150} alt='logo'/>
                            </div>
                            
                            
                            
                            <h1 className='profile-name'>{data.name}</h1>
                            <p className='profile-info'>{data.email}</p>
                            <p className='profile-info'>{data.location}</p>
                            <button onClick={clickProfile}>Edit Profile</button>
                            
                            
                        </div>
                    </div>
                    <div className='scans'>
                        <h1 className='scans-count'>6</h1>
                        <p className='scan-info'>Scans Done So Far</p>
                        <button onClick={handleClick}>Your History</button>
                    </div>
                </div>
            
            </div>
        </div>
        </>
    );
}

export default UserProfile;