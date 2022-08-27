import React from 'react'
import './FormStyles.css'

function Form() {
  return (
    <div className='back'>
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='text'></input>
            <label>Subject</label>
            <input type='text' ></input>
            <button className='btc sub'>Submit</button>
           
        </form>

        <hr></hr>
        
    </div></div>
  )
}

export default Form