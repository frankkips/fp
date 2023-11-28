import userIcon from '/user-icon.png'
import tractorIcon from '/vector.png'
import './App.css'
import { useState } from 'react'
import {useCallback}  from 'react'
import {useDropzone} from 'react-dropzone'
import axios from 'axios';
import ResultComponent from './ResultComponent'


function Home() {
    const [file, setFile] = useState();
    const [data, setData] = useState();
    const [preview, setPreview] = useState();
    const [showResult, setShowResult] = useState(false);
    // const [resultData, setResultData] = useState(null);

    const sendFile = async () => {
        if (file) {
            const reader = new FileReader();
            reader.onload = async () => {
                const formData = new FormData();
                formData.append('file', file);
            
                let res = await axios({
                    method: "post",
                    url: 'http://0.0.0.0:8000/predict',
                    data: formData,
                    });
                if (res.status === 200) {
                    setData(res.data);
                }
            }
            reader.readAsDataURL(file);
            
        }
        if (data !== null){ 
            setShowResult(true); // Update state to show the result content
            }  
    }


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
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Learn</a></li>
                            <li><a href='#'>Reccomend</a></li>
                        </ul>
                    <img src={userIcon} width={50} height={50} alt='logo' className='user-icon'/>
                </div>
                <div className='info-container'>
                {!showResult ? (
                    <div className='message-btn'>
                        <h1 className='text'>Upload or Drag your Potato leaf Image and will tell you if its healthy or not</h1>
                        <button onClick={sendFile}>Check</button>
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
        </div>
        </>
    );
}

export default Home;