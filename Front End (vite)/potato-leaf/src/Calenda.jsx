// import * as React from 'react';
import userIcon from '/user-icon.png'
import tractorIcon from '/vector.png'
import './App.css'
import { Link } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function BasicDateCalendar() {
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
                    <img src={userIcon} width={50} height={50} alt='logo' className='user-icon'/>
                </div>
                <div className='example-container'>
                    <div className='example-div'>
                    <div className='example-part'>
                        <div className="text-div">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <div style={{ width: 300, height: 270 }}>
                            <DateCalendar />
                        </div>
                        </LocalizationProvider>
                        </div>
                    </div>
                        
                    </div>
                </div>
            
            </div>
        </div>
        

        </>
    );
}