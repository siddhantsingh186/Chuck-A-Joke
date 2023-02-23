import React from 'react'
import chuck from '../../assets/images/chuck.svg'
import './landing.css'
import { useState } from 'react'
export const Landing = () => {
    const[joke, setJoke] = useState(null);
    const[liked, setLiked] = useState(false);
    const[disliked, setDisliked] = useState(false); 
    
    const handleClick = () => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => setJoke(data.value))
        .catch((error) => {
            console.log(error);
        })
    }

    const handleRefresh = () => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => setJoke(data.value))
        .catch((error) => {
            console.log(error);
        })
    }

    const handleLiked = () => {
        setLiked(true);
        setDisliked(false);
    }

    const handleDisliked = () => {
        setDisliked(true);
        setLiked(false);
    }

  return (
    <div className='landingPage'>
        <div className='top'>
            <h1 className="display-4" id = "header">Wanna hear a joke?</h1>
            <h1 className="display-4">Don't worry!! Chuck's got you covered</h1>
            <img className = "landing_image" src={chuck} alt="chuck" />
        </div>
        {joke === null ?
            <div className='bottom'>
                <button type="button" className="btn btn-primary btn-lg" onClick={handleClick}>Throw a joke</button>
            </div>
            : null
        }
        {joke === null ? null : 
            <div>
            <p className="displayJoke">{joke}</p>
            <div className="displayButtons">
                <button type="button" className="btn btn-primary btn-lg" onClick={handleLiked} disabled={liked}>Like</button>
                <button type="button" className="btn btn-danger btn-lg" onClick={handleDisliked} disabled={disliked}>Dislike</button>
                <button type="button" className="btn btn-secondary btn-lg" onClick={handleRefresh}>Give me a new one</button>
            </div>
        </div>
        }
    </div>
    )
}
