import userIcon from '/user-icon.png'
import { useState, useEffect} from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'


function UserProfile() {
    const [data,setData] = useState([])
    const [waba,setWaba] = useState([])
    const navigate = useNavigate()
    const [name, setName] = useState()

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
                <Header/>
                <div className='info-container'>
                    <div className='result-div'>
                        <div className='user-show'>
                            <div className="user-cover"></div>
                            <div className="user-pic">
                            <img src={dbImage[0] == undefined ? (userIcon) : (`/images/${dbImage}`)} width={150} height={150} alt='logo'/>
                            </div>

                            { 
                            
                            user.map(user => (
                                <>
                                <h1 className='profile-name'>{user.name}</h1>
                                <p className='profile-info'>{user.email}</p>
                                <p className='profile-info'>{user.location}</p>
                                </>
                            ))}
                            <button className='button-btn' onClick={clickProfile}>Edit Profile</button>
                        </div>
                    </div>
                    <div className='scans'>
                        <h1 className='scans-count'>{waba.length}</h1>
                        <p className='scan-info'>Scans Done So Far</p>
                        <button className='button-btn' onClick={handleClick}>Your History</button>
                    </div>
                </div>
            
            </div>
            
        </div>
        </>
    );
}

export default UserProfile;