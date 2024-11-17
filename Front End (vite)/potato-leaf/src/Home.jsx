import './App.css'
import { useState, useEffect } from 'react'
import {useCallback}  from 'react'
import {useDropzone} from 'react-dropzone'
import axios from 'axios';
import ResultComponent from './ResultComponent'
import { Analytics } from "@vercel/analytics/react"
import Header from './Header'

function Home() {
    const [file, setFile] = useState();
    const [data, setData] = useState();
    const [preview, setPreview] = useState();
    const [showResult, setShowResult] = useState(false);
    const [user, setUser] = useState()
    const [image, setImage] = useState()


// Maintain the name
    axios.defaults.withCredentials = true

    // Check Session for userlogin
    useEffect(() => {
        axios.get('http://10.42.0.1:3001/')
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


    // Convert Image to Base64 - not really!
    function convertToBase(e){
        console.log(e)
        setImage(e)
    }

    const updatePic = async(data) => {
        // console.log(data)
        const currentDate = new Date().toISOString().split('T')[0]
        const formdata = new FormData()
        formdata.append('image', image)
        formdata.append('class', data.class)
        formdata.append('confidence', data.confidence)
        formdata.append('date', currentDate)
        await axios.post(
            'http://10.42.0.1:3001/upload/' + user,
            formdata,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
        .then(response => {
            console.log(response)
            
        })
    }


    const sendFile = async () => {
        if (file) {
            const reader = new FileReader();
            reader.onload = async () => {
                const formData = new FormData();
                formData.append('file', file);
            
                let res = await axios({
                    method: "post",
                    url: 'http://10.42.0.1:8000/predict',
                    data: formData,
                    });
                if (res.status === 200) {
                    setData(res.data);
                    await updatePic(res.data)
                }
            }
            reader.readAsDataURL(file);
            
        }
        


        if (data !== null){ 
            // navigate('/result', {state: {data: data}})
            setShowResult(true); // Update state to show the result content
            updatePic(data) // Update the database with the image
            // console.log(data)
            }  
    }


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
                {!showResult ? (
                    <div className='message-btn'>
                        <h1 className='text'>{user ? `Hello ${user} Upload or Drag your Potato leaf Image` : 'Upload or Drag your Potato leaf Image and will tell you if its healthy or not'}</h1>
                        <button className='button-btn' onClick={sendFile}>Check</button>
                    </div>
                ) : (

                    data && (
                        <ResultComponent data={data} />
                    )
                )}

                    <div className='upload'>
                        <div className='drag-upload'{...getRootProps()}>
                            <input type='file' {...getInputProps()} />
                            {
                            !file && (
                                isDragActive ?
                                <p className='drag'>Drop the files here ...</p> :
                                <p className='drag'>Drag and drop photos, or click to select files</p>
                            )
                            }
                            {
                            file && (
                            <img className='leaf-new'src={preview} />
                            )
                            }
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            <Analytics />
        </div>
        </>
    );
}

export default Home;