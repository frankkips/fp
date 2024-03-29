import './App.css'
import './index.css'
import userIcon from '/user-icon.png'
import tractorIcon from '/vector.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import DropDown from './DropDown'


function Learn() {
    const [user, setUser] = useState()
    const [profImage, setProfImage] = useState([])
    const [openMenu, setOpenMenu] = useState(false)


    // Get the profile image
    useEffect(() => {
        axios.get('http://localhost:3001/getProfile')
        .then(user => {
            setProfImage(user.data)
            return
        })
        .catch(err => console.log(err))
    },[])

    // Get the name of the user
    const profileFoto = profImage.filter(waba => waba.name === user);
    const dbImage = profileFoto.map(waba => waba.image)

    // Maintain the name
    axios.defaults.withCredentials = true

    // Check Session for userlogin
    useEffect(() => {
        axios.get('http://localhost:3001/')
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


    return (
        <>
        <div className='learn-container'>
            <div className='learn-center-container'>
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
                <div className="learn-title">
                    <h1 className='learn-text'>Potato Leaf Diseases</h1>
                </div>
                <div className="wrapper">
                    <div className='learn-info-container'>
                        <div className='learn-div'>
                            <div className='learn-part'>
                                <h1 className='healthy'>Healthy Leaf</h1>
                                <p className='disc'>Potato leaves are dark green, glossy, and smooth or slightly hairy. They have an eight-leaflet structure with one terminal leaf and seven lateral leaflets. The number of lateral leaflets can range from two to 18 or more.</p>
                            </div>
                        </div>
                        <div className='leaf'></div>
                    </div>
                    <div className='learn-info-container-two'>
                        <div className='leaf-learn'></div>
                        <div className='learn-div'>
                            <div className='learn-part-op'>
                                <h1 className='healthy'>Early Blight Disease</h1>
                                <p className='disc'>Early blight of potato is caused by the fungus, Alternaria solani, which can cause disease in potato, tomato, other members of the potato family, and some mustards. This disease, also known as target spot, rarely affects young, vigorously growing plants. It is found on older leaves first. Early blight is favored by warm temperatures and high humidity.</p>
                            
                            </div>
                        </div>
                        
                    </div>
                    <div className='learn-info-container'>
                        <div className='learn-div'>
                            <div className='learn-part'>
                                <h1 className='healthy'>Late Blight Disease</h1>
                                <p className='disc'>Late blight of potato is a serious disease caused by Phytophthora infestans. It affects potato, tomato and, occasionally, eggplant and other members of the potato family. Late blight is the worst potato disease. It was first reported in the 1830s in Europe and in the US. It is famous for being the cause of the 1840s Irish Potato Famine. Late blight continued to be a devastating problem until the 1880s when the first fungicide was discovered. In recent years, it has reemerged as a problem. It is favored by cool, moist weather and can kill plants within two weeks if conditions are right.</p>
                            
                            </div>
                        </div>
                        <div className='leaf-late'></div>
                    </div>
                    <Link to='https://ipm.cahnr.uconn.edu/early-blight-and-late-blight-of-potato/' className='learn-btn'>Learn More</Link>
                </div>
                
                
                {
                openMenu && (
                    <DropDown/>
                )
            }
            </div>
        </div>
        </>
    );
}

export default Learn