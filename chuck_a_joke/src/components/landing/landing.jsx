import chuck from '../../assets/images/chuck.svg'
import './landing.css'
import { useState} from 'react'
import {useDispatch} from 'react-redux'
import { addToLikedJokes, addToDislikedJokes , removeFromLikedJokes, removeFromDislikedJokes} from '../../redux/actions'
export const Landing = () => {
    const[joke, setJoke] = useState(null);
    const[liked, setLiked] = useState(false);
    const[disliked, setDisliked] = useState(false); 
    const dispatch = useDispatch();

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

        setLiked(false);
        setDisliked(false);
    }

    const handleLiked = (joke) => {
        setLiked(true);
        setDisliked(false);
        dispatch(addToLikedJokes(joke));
        dispatch(removeFromDislikedJokes(joke));
    }

    const handleDisliked = (joke) => {
        setDisliked(true);
        setLiked(false);
        dispatch(addToDislikedJokes(joke));
        dispatch(removeFromLikedJokes(joke));
    }

  return (
    <div className='landingPage'>
        <div className='top'>
            <h1 className="display-5" id = "header">Wanna hear a joke?</h1>
            <h1 className="display-5">Don't worry!! Chuck's got you covered</h1>
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
                <button type="button" className="btn btn-primary btn-lg" onClick={() => handleLiked(joke)} disabled={liked}>Like</button>
                <button type="button" className="btn btn-danger btn-lg" onClick={() => handleDisliked(joke)} disabled={disliked}>Dislike</button>
                <button type="button" className="btn btn-secondary btn-lg" onClick={handleRefresh}>Give me a new one</button>
            </div>
        </div>
        }
    </div>
    )
}

