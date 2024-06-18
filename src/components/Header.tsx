import Link from 'next/link'
import React from 'react'


export default function Header() {
  return (
    <div className='nav'>
      <div className='logo'>
        <h1><b>Fuvay Dev. Tech.</b></h1>
      </div>
      <div className='link'>
        <div >
        <ul className='links'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Contact</Link></li>
        </ul>
        </div>
        <div className='bot-btn'>
            <button><Link href="chatbot">Chat with Bot</Link></button>
        </div>
        
      </div>
    </div>
  )
}
