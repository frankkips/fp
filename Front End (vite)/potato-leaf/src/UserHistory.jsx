import './App.css'
import Cells from './Cells'
import { differenceInDays, endOfMonth, startOfMonth, sub, add, format } from 'date-fns';
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header'

const UserHistory =  () => {
    const [data,setData] = useState([])
    const [user,setUser] = useState()
    const [most, setMost] = useState()
    console.log(most)


    // Maintain the name
    axios.defaults.withCredentials = true

    // Check Session for userlogin
    useEffect(() => {
        axios.get('https://kips-mongodb.onrender.com/')
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


    // Get data from API
    useEffect(() => {
        axios.get('https://kips-mongodb.onrender.com/getData/' + user)
        .then(user => {
            setData(user.data.data)
        })
        .catch(err => console.log(err))

        axios.get('https://kips-mongodb.onrender.com/mostCommonClass/' + user)
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
                <Header/>
                <div className='hist-divider'>
                <div className='hist-container'>
                    
                    {data.map((item) => 
                        <div className='hist-cont' key={item._id}>
                        
                        <img src={`/images/${item.image}`} width={150} height={150} alt="leaf img"  className='hist-img'/>
                        <div>
                            <h1>{item.class}</h1>
                            <h2>{(parseFloat(item.confidence) * 100).toFixed(2)}%</h2>
                            <p>{item.date}</p>
                        </div>
                        
                        </div>
                        
                    
                        )}

                </div>
                <div className="cal-cont">
                    <div className='hist-cont'>
                        <div className='common'>
                            <h2>Most Common Result</h2>
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
        </div>
        </>
    )
};

export default UserHistory;