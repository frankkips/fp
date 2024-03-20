import userIcon from '/user-icon.png'
import { useState, useEffect} from 'react'
import tractorIcon from '/vector.png'
import './App.css'
import { Link } from 'react-router-dom'
// import data from './data.json'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'



function UserProfile() {
    const [data,setData] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    const {name} = location.state
    // console.log(data)


    const user = data.filter(user => user.name === name);
    const dbImage = user.map(user => user.image)
    console.log(dbImage)


    const clickProfile = () => {
        navigate('/user/edit-profile', {state: {user: user}})
    }
    const handleClick = () => {
        navigate('/user/history')
    };

    useEffect(() => {
        axios.get('http://localhost:3001/getProfile')
        .then(user => {
            setData(user.data)
        })
        .catch(err => console.log(err))
    },[name])


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
                    <Link to='/user/login' className='user-link'>
                        <img src={dbImage[0] == undefined ? (userIcon) : (`/images/${dbImage}`)} width={50} height={50} alt='logo' className='user-icon'/>
                    </Link>
                </div>


                <div className='info-container'>
                    <div className='result-div'>
                        <div className='user-show'>
                            <div className="user-cover"></div>
                            <div className="user-pic">
                            <img src={dbImage[0] == undefined ? (userIcon) : (`/images/${dbImage}`)} width={150} height={150} alt='logo'/>
                            </div>

                            {user.map(user => (
                                <>
                                <h1 className='profile-name'>{user.name}</h1>
                                <p className='profile-info'>{user.email}</p>
                                <p className='profile-info'>{user.location}</p>
                                </>
                            ))}
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