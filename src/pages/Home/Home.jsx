import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container py-32 text-center">
      <h1 className="font-extrabold text-4xl md:text-6xl text-gray-800">Arief R Ramadhan</h1>
      <h2 className="font-semibold text-md md:text-lg text-gray-600 mt-2">Product Enthusiast</h2>

      <div className="flex justify-center mt-8 space-x-5">
        <a href="https://linkedin.com/in/ariefrizkyr" target="_blank" rel="noreferrer">
          <FaLinkedin size={28} />
        </a>
        <a href="https://github.com/ariefrizkyr" target="_blank" rel="noreferrer">
          <FaGithub size={28} />
        </a>
        <a href="https://instagram.com/ariefrizkyr" target="_blank" rel="noreferrer">
          <FaInstagram size={28} />
        </a>
        <a href="https://twitter.com/ariefrizkyr" target="_blank" rel="noreferrer">
          <FaTwitter  size={28} />
        </a>
      </div>
    </div>
  )
}

export default Home