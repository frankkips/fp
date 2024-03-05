import userIcon from '/user-icon.png'
import tractorIcon from '/vector.png'
import './App.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {useDropzone} from 'react-dropzone'
import { useCallback, useEffect, useState } from 'react'
// import axios from 'axios'


function EditProfile() {
    const [file, setFile] = useState();
    const navigate = useNavigate()
    // const [data, setData] = useState();
    const [preview, setPreview] = useState();
    const location = useLocation()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [locate, setLocation] = useState("")
    const [password, setPassword] = useState("")
    


    // Call API
    const updateData = () => {
        const id = location.state.user[0]._id
        // e.preventDefault()
        // axios.post('http://localhost:3001/updateProfile',{id,name,email,location, password})
        // .then(result => console.log(result))
        // .catch(err => console.log(err))

        fetch('http://localhost:3001/updateProfile',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                name: name,
                email: email,
                location: locate,
                password: password
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            navigate('/user', {state: {name: name}})
    })
    }




    useEffect(() => {
        setName(location.state.user[0].name)
        setEmail(location.state.user[0].email)
        setLocation(location.state.user[0].location)
        setPassword(location.state.user[0].password)
    },[location.state.user])


    // Drag and Drop Features
    const onDrop = useCallback(acceptedFiles => {
        setFile(acceptedFiles[0])
        setPreview(URL.createObjectURL(acceptedFiles[0]))
        

    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


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
                    <Link to='/user/login' className='user-link'>
                        <img src={userIcon} width={50} height={50} alt='logo' className='user-icon'/>
                    </Link>
                </div>
                <div className='info-container'>
                    <div className='profile-div'>
                        <div className='login'>
                            <h2>Profile Details</h2>
                            <input type="text" placeholder='Username' defaultValue={name} onChange={(e) => setName(e.target.value)}/>
                            <input type= "password" placeholder='Password' defaultValue={password} onChange={(e) => setPassword(e.target.value)}/>
                            <input type="email" placeholder='Email' defaultValue={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input type="text" placeholder='Location' defaultValue={locate} onChange={(e) => setLocation(e.target.value)}/>
                            <button onClick={updateData}>Update</button>
                        </div>
                        <div className='login'>
                            <h2>Profile Picture</h2>

                            <div className='p-upload'>
                                <div className='profile-upload'{...getRootProps()}>
                                    <input type='file' {...getInputProps()} />
                                    {
                                    !file && (
                                        isDragActive ?
                                        <p>Drop the files here ...</p> :
                                        <p >Drag n Drop or Click</p>
                                    )
                                    }
                                    {
                                    file && (
                                    <img className='profile-leaf'src={preview} />
                                    )
                                    }
                                    
                                </div>
                                
                            </div>

                            {/* <button>Upload</button> */}
                        </div>
                    </div>
                    
                </div>
            
            </div>
        </div>
        </>
    );
}

export default EditProfile;