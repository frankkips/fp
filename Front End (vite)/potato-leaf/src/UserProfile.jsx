import userIcon from '/user-icon.png'
import tractorIcon from '/vector.png'
import './App.css'
import { Link } from 'react-router-dom'


function UserProfile() {


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
                            <h1 className='profile-name'>frankkips</h1>
                            <p className='profile-info'>franklinekiplagat1@gmail.com</p>
                            <p className='profile-info'>Londiani</p>
                            <button>Edit Profile</button>
                        </div>
                    </div>
                    <div className='scans'>
                        <h1 className='scans-count'>6</h1>
                        <p className='scan-info'>Scans Done So Far</p>
                        <button>Your History</button>
                    </div>
                </div>
            
            </div>
        </div>
        </>
    );
}

export default UserProfile;