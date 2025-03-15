import React from 'react';
import './App.css';

export const Header = ()=> {
  return (
    <div className="header">
      <header className="grid grid-cols-3 items-center justify-between p-5 sm:p-10">
        <h1 className="text-3xl text-purple-400 text-left">My PORTfolio</h1>
        <h2 className="text-1xl text-purple-400 text-center">{new Date().toLocaleString()}</h2>
        <h2 className="text-1xl text-purple-400 text-center"><a href="https://www.linkedin.com/in/sinethharshana/">Contact Me</a></h2>
      </header>
    </div>
  )
}

export const About = () =>{
  return(
    <div className="bg-image">
      <div className="about p-5 sm:p-10">
        <h1 className="text-4xl sm:text-8xl not-sm:mt-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Hi I am SINETH SIYAMBALAGODA</h1>
        <p className="pt-5 sm:pt-10 pr-2 sm:pr-5 text-base sm:text-lg text-white leading-7 sm:leading-15 rounded-r-3xl">
          <b className="text-5xl sm:text-8xl">"</b> I am a full stack developer with a passion for creating beautiful and functional web applications. 
          I have experience with a variety of technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB.
          I am always looking to learn new things and improve my skills. In my free time, I enjoy reading, playing video games,
          and spending time with my family.<b className="text-4xl sm:text-6xl">     "</b> 
        </p>
        <DownloadCVButton />
      </div>
    </div>
  )
}

export const DownloadCVButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1NCz4ZOUfH-6uxoMRfzeGx7lt1M_c5Zak/view?usp=drive_link'; 
    link.download = 'My_CV.pdf';
    link.click();
  };

  return (
    <div className="mt-10 flex justify-center">
      <button onClick={handleDownload} className="hover:bg-white rounded-l-2xl hover:text-black bg-purple-400 text-white font-bold py-2 px-4 rounded">
        Download CV
        <video autoPlay loop muted className="">
          <source src="download.webm" type="video/webm"/>
        </video>
      </button>
    </div>
  );
      
   
 
};

export const Footer =() =>{
  return(
    <div className="footer">
      <footer>
        <p>©{new Date().getFullYear()}  Sineth Siyambalagoda. All rights reserved. </p>
      
      </footer>
    </div>
  )
}

const App = () => {
  return (
    <main>

       <Header />   
       <About />
       <Footer />
      
       

    </main>
    
  
  )
}

export default App;