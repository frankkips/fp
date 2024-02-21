import './App.css'
import userIcon from '/user-icon.png'
import tractorIcon from '/vector.png'
import { Link } from 'react-router-dom'


function Learn() {



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
                        </ul>
                    <img src={userIcon} width={50} height={50} alt='logo' className='user-icon'/>
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
                    <div className='learn-info-container'>
                        <div className='learn-div'>
                            <div className='learn-part'>
                                <h1 className='healthy'>Early Blight Disease</h1>
                                <p className='disc'>Potato leaves are dark green, glossy, and smooth or slightly hairy. They have an eight-leaflet structure with one terminal leaf and seven lateral leaflets. The number of lateral leaflets can range from two to 18 or more.</p>
                            
                            </div>
                        </div>
                        <div className='leaf'></div>
                    </div>
                    <div className='learn-info-container'>
                        <div className='learn-div'>
                            <div className='learn-part'>
                                <h1 className='healthy'>Late Blight Disease</h1>
                                <p className='disc'>Potato leaves are dark green, glossy, and smooth or slightly hairy. They have an eight-leaflet structure with one terminal leaf and seven lateral leaflets. The number of lateral leaflets can range from two to 18 or more.</p>
                            
                            </div>
                        </div>
                        <div className='leaf'></div>
                    </div>
                </div>
                
                
            
            </div>
        </div>
        </>
    );
}

export default Learn