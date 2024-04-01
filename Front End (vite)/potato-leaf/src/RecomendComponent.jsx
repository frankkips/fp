import './App.css'
import PropTypes from 'prop-types';



const LateBlightList = () => (
    <ul className='reco-list'>
                <>
                <li>Use certified disease-free seed potatoes and practice crop rotation.</li>
                <li>Monitor weather conditions and apply fungicides during humid periods.</li>
                <li>Space plants properly and promote airflow to reduce moisture.</li>
                <li>Remove infected plant material promptly to prevent spread.</li>
                <li>Choose potato varieties resistant to late blight when possible.</li>
                </>
    </ul>
)

const EarlyBlightList = () => (
    <ul className='reco-list'>
                <>
                <li>Monitor weather conditions and apply fungicides during humid periods</li>
                <li>Remove infected plant material promptly to prevent spread</li>
                <li>Apply fungicides containing copper or mancozeb at first signs of infection</li>
                <li>Maintain a regular fungicide spray schedule during disease-prone periods.</li>
                </>
                
    </ul>
)


const ReccomendComponent = ({ data }) => {
        const disease = data.class;

        
        
        if (disease === 'Late Blight') {
            return(
                <div className='recomend-part'>
                    <h1 className='recomend-text'>Reccomendations</h1>
                    <LateBlightList />
                    <a className='rec-btn' href="/">Home</a>
                </div>
            )
        } else if (disease === 'Early Blight') {
            return(
                <div className='recomend-part'>
                    <h1 className='recomend-text'>Reccomendations</h1>
                    <EarlyBlightList />
                    <a className='rec-btn' href="/">Home</a>
                </div>
            )
        } else {
            return(
                <div className='recomend-part'>
                    <h1 className='recomend-text'>Reccomendations</h1>
                    <h1 className='recomend-text'>Please visit our learn page to learn more about potato leaf disease</h1>
                    <a className='rec-btn' href="/">Home</a>
                </div>
            )
        }
    

}
ReccomendComponent.propTypes = {
    data: PropTypes.shape({
        class: PropTypes.string.isRequired,
        confidence: PropTypes.number.isRequired,
    }).isRequired,
};

export default ReccomendComponent;