import React from 'react'
import './Error.css'

const Error = () => {
  return (
    <div className='searchHistoryError'>
        <h1 className='display-4' style={{color: "red"}}>Oops!!</h1>
        <h1 className='display-4'style={{color: "red"}}>The file which you requested for seems to be empty!!</h1>
    </div>
  )
}

export default Error