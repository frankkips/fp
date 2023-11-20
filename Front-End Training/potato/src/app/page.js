import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {




  return (
    <>
    <div className='container'>
      <div className='centered-container'>
        <div className='header'>
          <div className='logo-container'>
            <Image src='/vector.png' width= {47} height={39}alt='logo' className='logo-img'/>
            <h1 className='logo'>Mkulima</h1>
          </div>
            <ul className='list'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Learn</a></li>
            <li><a href='#'>Reccomend</a></li>
          </ul>
          <Image src='/user-icon.png' width={50} height={50} alt='logo' className='user-icon'/>
        </div>
        <div className='info-container'>
          <div className='message-btn'>
            <h1 className='text'>Upload or Drag your Potato leaf Image and will tell you if its healthy or not</h1>
            <button>Check</button>
          </div>
          <div className='upload'>
            <p className='drag'>Drag and Drop photo</p>

          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}
