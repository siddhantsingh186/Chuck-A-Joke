import React from 'react'
import './jokeSearchError.css'
import chuck from '../../assets/images/chuck.svg'
const JokeSearchError = () => {
  return (
    <div className='jokeSearchError'>
        <h1 className="display-4" style={{color: "red", marginTop: "60px"}}>Oops!</h1>
        <h1 className="display-6" style={{color: "red"}}>Chuck Norris is unable to get any jokes</h1>
        <h1 className="display-6" style={{color: "red"}}>Make sure you enter a valid search input</h1>
        <div className='top'>
            <img className = "landing_image" src={chuck} alt="chuck" />
        </div>
    </div>
  )
}

export default JokeSearchError