// No longer need to use this file
// Update - now using this file

import userIcon from '/user-icon.png'
import tractorIcon from '/vector.png'
import './App.css'
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom'



function Result(){
    const location = useLocation()
    const data = location.state.data
    console.log(data)

    const handleButtonClick = () => {

    };

    // const disease = data.class;
    // let confidence = data.confidence;
    // confidence = (parseFloat(data.confidence) * 100).toFixed(2);
    // console.log(confidence)
    // if (confidence == 100){
    //     confidence = (parseFloat(data.confidence) * 100).toFixed(0);
    // }


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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/chat">Chat</Link></li>
                            <li><Link to="/learn">Learn</Link></li>
                        </ul>
                    <img src={userIcon} width={50} height={50} alt='logo' className='user-icon'/>
                </div>
                <div className='info-container'>
                    <div className='result-div'>
                    <div className='result-part'>
                        <div className="text-div">
                            <h1 className='result-text'>disease</h1>
                            <button className='tips-btn' onClick= {handleButtonClick}>Suggestions</button>
                        </div>
                        <div className='asured'>
                            <h1 className='percent'>100%</h1>
                            <h1 className='confidence'>Confidence</h1>
                        </div>
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

Result.propTypes = {
    data: PropTypes.shape({
        class: PropTypes.string.isRequired,
        confidence: PropTypes.number.isRequired,
    }).isRequired,
};
export default Result;