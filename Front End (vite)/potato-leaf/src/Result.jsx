// No longer need to use this file

import userIcon from '/user-icon.png'
import tractorIcon from '/vector.png'
import './App.css'


function Result(){
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
                        <div className='result-part'>
                            <h1 className='result-text'>Early Blight <br/>Disease</h1>
                            <div className='asured'>
                                <h1 className='percent'>100%</h1>
                                <h1 className='confidence'>Confidence</h1>
                            </div>
                        </div>
                        <div className='btn-div'>
                            <button>Suggestions</button>
                        </div>
                    </div>
                    <div className='leaf'>
                        

                    </div>
                    
                </div>
            
            </div>
        </div>
        </>
    )
}
export default Result;