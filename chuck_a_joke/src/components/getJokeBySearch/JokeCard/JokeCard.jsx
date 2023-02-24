import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import chuck from '../../../assets/images/chuck.svg'
import { addToLikedJokes, addToDislikedJokes , removeFromLikedJokes, removeFromDislikedJokes} from '../../../redux/actions'
const JokeCard = ({value,id}) => { 
    const dispatch = useDispatch();
    const [liked , setLiked] = useState(false);
    const [disliked , setDisliked] = useState(false);
    
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
    <div className="card" style={{width: "18rem"}} key ={id}>
        <img src= {chuck} className="card-img-top" alt="..."/>
        <div className="card-body">
        <p className="card-text" style={{fontFamily: "monospace" , fontSize: "17px"}}>{value}</p>
        <button type="button" className="btn btn-primary btn-lg" style={{marginRight: "20px"}} onClick={() => handleLiked(value)} disabled={liked}>Like</button>
        <button type="button" className="btn btn-danger btn-lg" onClick={() => handleDisliked(value)} disabled={disliked}>Dislike</button>
        </div>
    </div>
  )
}

export default JokeCard