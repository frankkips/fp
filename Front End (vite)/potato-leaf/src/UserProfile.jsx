import userIcon from '/user-icon.png'
import { useState, useEffect} from 'react'
import tractorIcon from '/vector.png'
import './App.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DropDown from './DropDown'



function UserProfile() {
    const [data,setData] = useState([])
    const [waba,setWaba] = useState([])
    const navigate = useNavigate()
    const [name, setName] = useState()
    const [openMenu, setOpenMenu] = useState(false)

    // Get User Name from the API
    axios.defaults.withCredentials = true
    

    useEffect(() => {
        axios.get('http://localhost:3001/')
        .then(res => {
            if (res.data.valid === true){
                setName(res.data.username)
            }else{
                setName(null)
            }
            
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    // Get data from API
    useEffect(() => {
        axios.get('http://localhost:3001/getData/' + name)
        .then(user => {
            setWaba(user.data.data)
        })
        .catch(err => console.log(err))
    },[name])

    const user = data.filter(user => user.name === name);
    const dbImage = user.map(user => user.image)


    const clickProfile = () => {
        navigate('/user/edit-profile', {state: {user: user}})
    }
    const handleClick = () => {
        navigate('/user/history', {state: {name: name}})
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
                        <img onClick={() => setOpenMenu((prev) => !prev)} src={dbImage[0] == undefined ? (userIcon) : (`/images/${dbImage}`)} width={50} height={50} alt='logo' className='user-icon'/>
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
                        <h1 className='scans-count'>{waba.length}</h1>
                        <p className='scan-info'>Scans Done So Far</p>
                        <button onClick={handleClick}>Your History</button>
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
    );
}

export default UserProfile;