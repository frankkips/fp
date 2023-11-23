import userIcon from '/user-icon.png'
import tractorIcon from '/vector.png'
import './App.css'

function Reccomend(){

    return(
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
                    <div className='result-div'>
                        <div className='recomend-part'>
                            <h1 className='recomend-text'>Reccomendations</h1>
                            <ul className='reco-list'>
                                <li>Remove Infected Leaves</li>
                                <li>Use Copper-based fungicides</li>
                                <li>Proper Irrigation</li>
                                <li>Crop Rotation</li>
                                <li>proper plant spacing and pruning</li>

                            </ul>
                            
                        </div>
                    </div>
                    <div className='leaf'>
                    </div>
                    
                </div>
            
            </div>
        </div>
       </>
    );
}

export default Reccomend;