import React from 'react'
import './TrainingStyles.css'

import { Link } from 'react-router-dom'

import Pod from '../assets/pod.jpg'
import Pod2 from '../assets/pod2.jpg'
function Training() {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <p className='trai'>"GLS TRVL" tourism company was established in 2001. We specialize in providing high quality tourism services and we promise you that you will really enjoy our service.We guarantee you a quality vacation and excellent service in preparation of documents and trips abroad.</p>
            <Link to='/contact'><button className='button btc'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Pod} className='img' alt=''/>
                </div>
                <div className='image-stack bottom'>
                    <img src={Pod2} className='img' alt=''/>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Training