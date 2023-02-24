import React from 'react'
import './loadingPage.css'
const LoadingPage = () => {
  return (
    <div className='loadingPage'>
        <div className="d-flex align-items-center" style={{columnGap : "36px"}}>
            <strong>Loading...</strong>
            <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
        </div>
    </div>
  )
}

export default LoadingPage