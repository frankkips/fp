import userIcon from '/user-icon.png'
import tractorIcon from '/vector.png'
import './App.css'
import { Link } from 'react-router-dom'
import {useDropzone} from 'react-dropzone'
import { useCallback, useState } from 'react'


function EditProfile() {
    const [file, setFile] = useState();
    // const [data, setData] = useState();
    const [preview, setPreview] = useState();


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
                    <Link to='/user' className='user-link'>
                        <img src={userIcon} width={50} height={50} alt='logo' className='user-icon'/>
                    </Link>
                </div>
                <div className='info-container'>
                    <div className='profile-div'>
                        <div className='login'>
                            <h2>Profile Details</h2>
                            <input type="text" placeholder='Username'/>
                            <input type= "password" placeholder='Password'/>
                            <input type="email" placeholder='Email'/>
                            <input type="text" placeholder='Location'/>
                            <button>Update</button>
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