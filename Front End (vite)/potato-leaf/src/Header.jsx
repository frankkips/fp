import userIcon from '/user-icon.png'
import tractorIcon from '/vector.png'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import DropDown from './DropDown'



function Header(){
    const [user, setUser] = useState()
    const [openMenu, setOpenMenu] = useState(false)
    const [profImage, setProfImage] = useState([])


        // Check Session for userlogin
        useEffect(() => {
            axios.get('http://https://kips-mongodb.onrender.com/')
            .then(res => {
                if (res.data.valid === true){
                    setUser(res.data.username)
                }else{
                    setUser(null)
                }
                
            })
            .catch(err => {
                console.log(err)
            })
        }, [])


            // Get the profile image
    useEffect(() => {
        axios.get('http://https://kips-mongodb.onrender.com/getProfile')
        .then(user => {
            setProfImage(user.data)
            return
        })
        .catch(err => console.log(err))
    },[])

    // Get the name of the user
    const profileFoto = profImage.filter(waba => waba.name === user);
    const dbImage = profileFoto.map(waba => waba.image)

    return(
        <>
            <div className='header'>
                    <div className='logo-container'>
                        <img src={tractorIcon} width= {47} height={39}alt='logo' className='logo-img'/>
                        <h1 className='logo'>Mkulima</h1>
                    
                    </div>
                        <ul className='list'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/chat">Chat</Link></li>
                            <li><Link to="/learn">Learn</Link></li>
                            {
                                user && 
                                <li><Link to="/user/history">History</Link></li>
                            }
                        </ul>
                        <img onClick={() => setOpenMenu((prev) => !prev)} src={dbImage[0] == undefined ? (userIcon) : (`/images/${dbImage}`)} width={50} height={50} alt='logo' className='user-icon'/>
                </div>
                {
                openMenu && (
                    <DropDown/>
                )
            }
        </>
    )
}

export default Header