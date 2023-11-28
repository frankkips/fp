
import './App.css'
import PropTypes from 'prop-types';

const ResultComponent = ({ data }) => {
    const disease = data.class;
    let confidence = data.confidence;
    confidence = (parseFloat(data.confidence) * 100).toFixed(2);

    return (
    <div className='result-part'>
        <h1 className='result-text'>{disease}</h1>
        <div className='asured'>
        <h1 className='percent'>{confidence}%</h1>
        <h1 className='confidence'>Confidence</h1>
    </div>
    </div>
    );
};


ResultComponent.propTypes = {
    data: PropTypes.shape({
        class: PropTypes.string.isRequired,
        confidence: PropTypes.number.isRequired,
    }).isRequired,
};
export default ResultComponent;