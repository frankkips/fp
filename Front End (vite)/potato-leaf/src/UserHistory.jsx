import userIcon from '/user-icon.png'
import tractorIcon from '/vector.png'
import './App.css'
import { Link } from 'react-router-dom'
import leafIcon from '/Early.jpg'
import Cells from './Cells'

function UserHistory(){

    const daysOfWeek= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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
                <div className='hist-divider'>
                <div className='hist-container'>
                    <div className='hist-cont'>
                        <img src={leafIcon} width={150} height={150} alt="leaf img"  className='hist-img'/>
                        <div>
                            <h1>Early Blight Disease</h1>
                            <h2>100%</h2>
                            <p>27 Feb 2024</p>
                        </div>
                    </div>
                    <div className='hist-cont'>
                        <img src={leafIcon} width={150} height={150} alt="leaf img"  className='hist-img'/>
                        <div>
                            <h1>Early Blight Disease</h1>
                            <h2>100%</h2>
                            <p>27 Feb 2024</p>
                        </div>
                    </div>
                    <div className='hist-cont'>
                        <img src={leafIcon} width={150} height={150} alt="leaf img"  className='hist-img'/>
                        <div>
                            <h1>Early Blight Disease</h1>
                            <h2>100%</h2>
                            <p>27 Feb 2024</p>
                        </div>
                    </div>
                    <div className='hist-cont'>
                        <img src={leafIcon} width={150} height={150} alt="leaf img"  className='hist-img'/>
                        <div>
                            <h1>Early Blight Disease</h1>
                            <h2>100%</h2>
                            <p>27 Feb 2024</p>
                        </div>
                    </div>
                </div>
                <div className="cal-cont">
                    <div className='hist-cont'>
                        <div className='common'>
                            <h2>Most common disease</h2>
                            <h1>Early Blight Disease</h1>
                        </div>
                    </div>
                    <div className='hist-cal'>
                            <div className="grid">
                                <Cells className='l-a'>{"<"}</Cells>
                                <Cells className='m'>Feb 2022</Cells>
                                <Cells className='r-a'>{">"}</Cells>
                                {daysOfWeek.map((day) => (<Cells key={day} className='day'>{day}</Cells>))}
                                <Cells></Cells>
                                <Cells>1</Cells>
                                <Cells>2</Cells>
                                <Cells>3</Cells>
                                <Cells>4</Cells>
                                <Cells>5</Cells>
                                <Cells>6</Cells>
                                <Cells>7</Cells>
                                <Cells>8</Cells>
                                <Cells>9</Cells>
                                <Cells>10</Cells>
                                <Cells>11</Cells>
                                <Cells>12</Cells>
                                <Cells>13</Cells>
                                <Cells>14</Cells>
                                <Cells>15</Cells>
                                <Cells>16</Cells>
                                <Cells>17</Cells>
                                <Cells>18</Cells>
                                <Cells>19</Cells>
                                <Cells>20</Cells>
                                <Cells>21</Cells>
                                <Cells>22</Cells>
                                <Cells>23</Cells>
                                <Cells>24</Cells>
                                <Cells>25</Cells>
                                <Cells>26</Cells>
                                <Cells>27</Cells>
                                <Cells>28</Cells>
                                <Cells>29</Cells>
                                <Cells>30</Cells>
                                <Cells>31</Cells>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default UserHistory;