import userIcon from '/user-icon.png'
import tractorIcon from '/vector.png'
import './App.css'
import { Link } from 'react-router-dom'
import Cells from './Cells'
import { differenceInDays, endOfMonth, startOfMonth, sub, add, format } from 'date-fns';
import { useEffect, useState } from 'react'
import axios from 'axios'
import DropDown from './DropDown'



const UserHistory =  () => {
    const [data,setData] = useState([])
    const [profImage, setProfImage] = useState([])
    const [user,setUser] = useState()
    const [most, setMost] = useState()
    const [openMenu, setOpenMenu] = useState(false)
    console.log(most)


    // Get the profile image
    useEffect(() => {
        axios.get('http://localhost:3001/getProfile')
        .then(user => {
            setProfImage(user.data)
            return
        })
        .catch(err => console.log(err))
    },[])

    // Maintain the name
    axios.defaults.withCredentials = true

    // Check Session for userlogin
    useEffect(() => {
        axios.get('http://localhost:3001/')
        .then(res => {
            if (res.data.valid === true){
                setUser(res.data.username)
            }else{
                setUser(null)
            }
            
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    // Get the name of the user
    const profileFoto = profImage.filter(waba => waba.name === user);
    const dbImage = profileFoto.map(waba => waba.image)
    


    // Get data from API
    useEffect(() => {
        axios.get('http://localhost:3001/getData/' + user)
        .then(user => {
            setData(user.data.data)
        })
        .catch(err => console.log(err))
    },[user])

    // Get the most common disease
    useEffect(() => {
        axios.get('http://localhost:3001/mostCommonClass/' + user)
        .then(user => {
            setMost(user.data.mostCommonClass)
        })
    },[user])


    const [value , setCurrentDate] = useState(new Date())
    const startDate = startOfMonth(value)
    const endDate = endOfMonth(value)
    const numDays = differenceInDays(endDate, startDate) + 1
    const prefixDays = startDate.getDay();

    const prevMonth = () => setCurrentDate(sub(value, {months: 1}));
    const nextMonth = () => setCurrentDate(add(value,{months: 1}))


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
                            {
                                user && 
                                <li><Link to="/user/history">History</Link></li>
                            }
                        </ul>
                        <img onClick={() => setOpenMenu((prev) => !prev)} src={dbImage[0] == undefined ? (userIcon) : (`/images/${dbImage}`)} width={50} height={50} alt='logo' className='user-icon'/>
                </div>
                <div className='hist-divider'>
                <div className='hist-container'>
                    
                    {data.map((item) => 
                        <div className='hist-cont' key={item._id}>
                        
                        <img src={`/images/${item.image}`} width={150} height={150} alt="leaf img"  className='hist-img'/>
                        <div>
                            <h1>{item.class}</h1>
                            <h2>{(parseFloat(item.confidence) * 100).toFixed(2)}%</h2>
                            <p>27 Feb 2024</p>
                        </div>
                        
                        </div>
                        
                    
                        )}

                </div>
                <div className="cal-cont">
                    <div className='hist-cont'>
                        <div className='common'>
                            <h2>Most common disease</h2>
                            <h1>{most}</h1>
                        </div>
                    </div>
                    <div className='hist-cal'>
                            <div className="grid">
                                <Cells onClick={prevMonth} className='l-a'>{"<"}</Cells>
                                <Cells className='m'>{format(value, "LLL yyyy")}</Cells>
                                <Cells onClick={nextMonth} className='r-a'>{">"}</Cells>
                                {daysOfWeek.map((day) => (<Cells key={day} className='day'>{day}</Cells>))}

                                {Array.from({length: prefixDays}).map((_,index) => {
                                    return <Cells key={index}/>
                                })}

                                {Array.from({length: numDays}).map((_,index) => {
                                    const date = index + 1;
                                    return <Cells key={date}>{date}</Cells>
                                    })
                                }
                            </div>
                    </div>
                </div>
            </div>
            </div>

            {
                openMenu && (
                    <DropDown/>
                )
            }
        </div>
        </>
    )
};

export default UserHistory;