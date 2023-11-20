import userIcon from '/user-icon.png'
import tractorIcon from '/vector.png'
import './App.css'

function Home() {
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
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Learn</a></li>
                            <li><a href='#'>Reccomend</a></li>
                        </ul>
                    <img src={userIcon} width={50} height={50} alt='logo' className='user-icon'/>
                </div>
                <div className='info-container'>
                    <div className='message-btn'>
                        <h1 className='text'>Upload or Drag your Potato leaf Image and will tell you if its healthy or not</h1>
                        <button>Check</button>
                    </div>
                    <div className='upload'>
                        <p className='drag'>Drag and Drop photo</p>

                    </div>
                </div>
            
            </div>
        </div>
        </>
    );
}

export default Home;