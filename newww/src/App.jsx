import React from 'react';
import './App.css';

const Profile = () => {

  return(
    <div className="main_section">   


      <div className="photo">
        <img src="IMG_8417.JPG"
        alt="profile" className="rounded-full"/>
      </div>
      <div className="info">
        <h2>I am SINETH SIYAMBLAGODA</h2>
        <p>SOFTWARE ENGINEERING</p>
        <p>Undergraduate of Open University Sri Lanka</p>
        
    </div>
      


    
    </div>

    
  )
}

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return(
    <footer className="footer">
      <div className="copyright"><h5>&copy; {currentYear} Sineth Siyamblagoda</h5><br></br></div>
      
      <div className='footer-logo'>

      <h5>created using tailWindcss+REACT JS</h5>
      <video className='logo-video' autoPlay loop muted><source src="logo.webm" type="video/webm" /></video> 

      </div>
      
     
      
    </footer>
  )
}

export const Button =()=>{
  return(
    <div className="button-social">
      <p>Connect With Me </p>
      <button onClick={() => window.open('https://www.facebook.com/SINETHHARSHANASG', '_blank')}>
        <img src="facebook.png" alt="Facebook" />
      </button>
      <button onClick={() => window.open('https://wa.me/775188118', '_blank')}>
        <img src="whatsapp.png" alt="WhatsApp" />
      </button>
      <button onClick={() => window.open('https://www.linkedin.com/in/sinethharshana/', '_blank')}>
        <img src="linkedin.png" alt="LinkedIn" />
      </button>
      <button onClick={() => window.open('https://github.com/SINETH-HARSHANA', '_blank')}>
        <img src="github.png" alt="GitHub" />
      </button>
    </div>  
  )
}

export const Header =()=>{
  return(
    <div className="header">
      
      <h1 className="text-3xl text-center text-white">  MyportFOLIO</h1>
      <button className="cv-button" onClick={() => window.open('https://drive.google.com/file/d/1NCz4ZOUfH-6uxoMRfzeGx7lt1M_c5Zak/view?usp=sharing', '_blank')}>DOWNLOAD MY CV</button>


    </div>
    
  )
}
  
const App = ()=>{

  return(

       <div>
        <Header/>
        <Profile/>
        <Button />
        <Footer/>
       
        
       </div>   
   
  )
  
}
export default App;