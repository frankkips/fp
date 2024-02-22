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
                
                
            
            </div>
        </div>
        </>
    );
}

export default Learn