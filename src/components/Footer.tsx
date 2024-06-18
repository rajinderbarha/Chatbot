import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div style={{padding: "50px 200px 50px 0px", display:" flex",  justifyContent:"space-evenly"}}>
      <div>
      <div className='logo'>
        <h1 style={{fontSize: "40px", fontFamily: "cursive", color: "white"}}><b><Link href="#">Fuvay Dev. Tech.</Link></b></h1>
      </div>
      </div>
      <div style={{ display: "flex"}}>
        <div style={{padding: "10px 20px"}}>
            <h1 style={{ color: "white", fontSize: "20px", fontWeight: "bold"}}> Address</h1>
          <ul>
            <li>TDS Tower, E-193, 5th Floor,</li>
            <li>Phase 8B,  Office No. 502</li>
            <li> Industrial Area, Sahibjada Ajit Singh Nagar, </li>
            <li>160055</li>
          </ul>
        </div>
        <div style={{padding: "10px 20px"}}>
            <h1 style={{ color: "white", fontSize: "20px", fontWeight: "bold"}}> Contact</h1>
          <ul>
            <li>Phone: +91 9600995800.</li>
            <li>Email: info@fuvaytechnologies.com</li>
           
          </ul>
        </div>
        
      </div>
    </div>
  )
}