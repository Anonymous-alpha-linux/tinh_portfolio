import React from 'react'
import './home.css';
import FbIcon from './assets/facebook-brands-solid-full.svg';
import GitIcon from './assets/github-brands-solid-full.svg';
import LinkedInIcon from './assets/linkedin-brands-solid-full.svg';

function Home() {
  return (
    <div className='page'>

      <div className="background gradient">
        <ul className='bg-bubbles'>
          {Array.from(Array(10)).map(() => <li></li>)}
        </ul>
      </div>
      <div className='layout-root'>
        <header class="layout-header flex flex-col">
           <a href="#about" class="menu-btn text-xs mb-[8px]">
            <span className='hamburger'></span>
           </a>
          <nav class="hidden md:flex space-x-6 flex-col menu-nav">
            <a href="#about" class="menu-btn text-xs">About</a>
            <a href="#projects" class="menu-btn text-xs">Projects</a>
            <a href="#skills" class="menu-btn text-xs">Skills</a>
            <a href="#contact" class="menu-btn text-xs">Contact</a>
          </nav>
        </header> 
        <div className="layout-left">
          <aside id="hero"> 
              <div className='profile-cover-image'>
                <img src="https://bslthemes.com/html/ryan/images/bg.jpg" alt='bg' loading='lazy'></img>
              </div>
            <div className="profile">
              <div className="profile-info">

              <div className='profile-avatar'>
                <img src="https://bslthemes.com/html/ryan/images/profile.png" alt='profile_bg' loading='lazy'></img>
              </div>
              <h1 className='text-center text-[34px]'>Nguyen Trung Tinh</h1>
              <h2 className='text-center text-base'>A Fullstack developer</h2>
              <div className='flex justify-center'>
                <img className='profile-icon' src={FbIcon} alt='facebook link'></img>
                <img className='profile-icon' src={GitIcon} alt='git link'></img>
                <img className='profile-icon' src={LinkedInIcon} alt='linked-in link'></img>
                {/* <FbIcon></FbIcon>
                <GitIcon></GitIcon>
                <LinkedInIcon></LinkedInIcon> */}
              </div>
              </div>
            </div>
            <div className='profile-footer flex justify-center'>
              <div className="profile-btn">
                DOWNLOAD CV
              </div>
              <div className='profile-btn-gap'></div>
              <div className="profile-btn">
                CONTACT ME
              </div>
            </div>
          </aside>
        </div>
        <div className='layout-right'>
          <main id='main'>
            <section id="about">
              <h2>About me</h2>

              <div>

              </div>
            </section>

            <section id="skills">
              <h2>Skills</h2>
            </section>

            <section id="projects">
              {/* Dùng "article" cho từng bài viết/dự án riêng */}
              <h2>Projects</h2>
            </section>

            <section id="testimonials"></section>

            <section id="contact">
              <h2>Contact</h2>
            </section>
          </main>
        </div>
      </div>

      {/* <footer id='footer'>
        <h2>Info</h2>
      </footer> */}
    </div>
  )
}

export default Home
