import React from 'react'
import logo from "../assets/raviKumarLogo.webp"
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className="flex flex-shrink-0 items-center">
          <a href="/" aria-label='Home'>
            <img src={logo} alt="" />
          </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>

        <a href="https://www.linkedin.com/in/abdul-khaleed-b48648193/"
        target='_blanck'
        rel='noopener noreferrer'
        aria-label='Linkedin'
        >
          <FaLinkedin/>
        </a>
        <a href="https://github.com/ShaikAbdulKhaliq"
        target='_blanck'
        rel='noopener noreferrer'
        aria-label='Github'
        >
          <FaGithub/>
        </a>
        <a href="https://www.instagram.com/khaleed_abdul1/"
        target='_blanck'
        rel='noopener noreferrer'
        aria-label='Instagram'
        >
          <FaInstagram/>
        </a>
        <a href="https://x.com/?lang=en"
        target='_blanck'
        rel='noopener noreferrer'
        aria-label='Twitter'
        >
          <FaSquareXTwitter/>
        </a>
      </div>
    </nav>
  ) 
}

export default Navbar