import './App.css'
import { useLocation, useNavigate } from 'react-router-dom'
import {useDropzone} from 'react-dropzone'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header'

// musunowakho

function EditProfile() {
    const [file, setFile] = useState();
    const navigate = useNavigate()
    const [preview, setPreview] = useState();
    const location = useLocation()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [locate, setLocation] = useState("")
    const [password, setPassword] = useState("")
    const [image, setImage] = useState("")
    const [dbImage, setDbImage] = useState("")
    console.log(dbImage)

    
    // Call API
    const updateData = () => {
        const id = location.state.user[0]._id
        

        fetch('https://kips-mongodb.onrender.com/updateProfile',{
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

    const updatePic = async(e) => {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('image', image)

        const id = location.state.user[0]._id
        
        await axios.post(
            'https://kips-mongodb.onrender.com/update-dp/' + id,
            formdata,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
    }

    // Convert Image to Base64
    function convertToBase(e){
        console.log(e)
        setImage(e)
    }
    
    
    useEffect(() => {
        setName(location.state.user[0].name)
        setEmail(location.state.user[0].email)
        setLocation(location.state.user[0].location)
        setPassword(location.state.user[0].password)
        setDbImage(location.state.user[0].image)
    },[location.state.user])


    // Drag and Drop Features
    const onDrop = useCallback(acceptedFiles => {
        setFile(acceptedFiles[0])
        setPreview(URL.createObjectURL(acceptedFiles[0]))
        onchange(convertToBase(acceptedFiles[0]))

    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <>
        <div className='container'>
            <div className='centered-container'>
                <Header/>
                <div className='info-container'>
                    <div className='profile-div'>
                        <div className='login'>
                            <h2>Profile Details</h2>
                            <input type="text" placeholder='Username' defaultValue={name} onChange={(e) => setName(e.target.value)} disabled/>
                            <input type= "password" placeholder='Password' defaultValue={password} onChange={(e) => setPassword(e.target.value)}/>
                            <input type="email" placeholder='Email' defaultValue={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input type="text" placeholder='Location' defaultValue={locate} onChange={(e) => setLocation(e.target.value)}/>
                            <button className='button-btn' onClick={updateData}>Update</button>
                        </div>
                        <div className='login'>
                            <h2>Profile Picture</h2>
                            <div className='p-upload'>
                                <div className='profile-upload'{...getRootProps()}>
                                    <input type='file'{...getInputProps()} />
                                    {
                                    
                                    !dbImage && !file ? (
                                            isDragActive ?
                                            <p>Drop the files here ...</p> :
                                            <p >Drag n Drop or Click</p>
                                        ):
                                        
                                        file ? (
                                        <img className='profile-leaf'src={preview} />
                                        ):
                                        
                                    
                                    
                                    dbImage && (
                                        <img className='profile-leaf'src={`/images/${dbImage}`} />
                                    
                                    )
                                    }
                                    
                                </div>
                                
                            </div>

                            <button className='upbtn' onClick={updatePic}>Upload</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );
}

export default EditProfile;