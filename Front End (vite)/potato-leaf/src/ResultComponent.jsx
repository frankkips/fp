import ReccomendComponent from './RecomendComponent'
import { useState } from 'react';
import './App.css'
import PropTypes from 'prop-types';

const ResultComponent = ({ data }) => {
    const [showRecommendations, setShowRecommendations] = useState(false);
    // const [showConfidence, setShowConfidence] = useState(false);
    const handleButtonClick = () => {
        setShowRecommendations(true);
    };

    const disease = data.class;
    if (disease === 'Not Potato'){
        return (
            <div className='result-part'>
                <div className="text-div">
                <h1 className='result-text'>{disease}</h1>
                {/* <button className='tips-btn' onClick= {handleButtonClick}>Suggestions</button> */}
                <a className='rec-btn' href="/">Clear</a>
                </div>
            </div>
        );
    }
    let confidence = data.confidence;
    confidence = (parseFloat(data.confidence) * 100).toFixed(2);
    console.log(confidence)
    if (confidence == 100){
        confidence = (parseFloat(data.confidence) * 100).toFixed(0);
    }
    

    return (
        <>
        {showRecommendations ? (<ReccomendComponent data={data}/>
        ) : (
        <div className='result-part'>
            <div className="text-div">
                <h1 className='result-text'>{disease}</h1>
                <button className='tips-btn' onClick= {handleButtonClick}>Suggestions</button>
            </div>
            
            <div className='asured'>
                <h1 className='percent'>{confidence}%</h1>
                <h1 className='confidence'>Confidence</h1>
            </div>
        </div>

        )}
    
    </>
    );
};


ResultComponent.propTypes = {
    data: PropTypes.shape({
        class: PropTypes.string.isRequired,
        confidence: PropTypes.number.isRequired,
    }).isRequired,
};
export default ResultComponent;