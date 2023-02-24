import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import './getJokeByCategory.css'
import {useDispatch} from 'react-redux';
import chuck from '../../assets/images/chuck.svg'
import { addToLikedJokes, addToDislikedJokes , removeFromLikedJokes, removeFromDislikedJokes} from '../../redux/actions'
import LoadingPage from '../loader/loadingPage';
const JokeByCategory = () => {
    const {category} = useParams();
    const [categoryJoke, setCategoryJoke] = useState(null);
    const [liked , setLiked] = useState(false);
    const [disliked , setDisliked] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(response => response.json())
        .then(data => setCategoryJoke(data.value))
        .catch((error) => {
            console.log(error);
        })
    }, [category])

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

    const handleChange = () => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(response => response.json())
        .then(data => setCategoryJoke(data.value))
        .catch((error) => {
            console.log(error);
        })
        setLiked(false);
        setDisliked(false);
    }

  return (
    <>
        {categoryJoke === null ? <LoadingPage/>
        :  
                 (
                 <div className='jokeByCategory'>
                    <img src = {chuck} alt = "chuck" className = "categoryImage" />
                    <p style={{fontSize : "18px", fontWeight: "800"}}>Here is a fresh joke for you in {category} category</p>
                    <p className='joke'>{categoryJoke}</p> 
                    <div className="displayButtons">
                        <button type="button" className="btn btn-primary btn-lg" onClick={()=>handleLiked(categoryJoke)} disabled = {liked}>Like</button>
                        <button type="button" className="btn btn-danger btn-lg" onClick ={()=>handleDisliked(categoryJoke)} disabled ={disliked}>Dislike</button>
                        <button type="button" className="btn btn-secondary btn-lg" onClick = {handleChange}>Give me a new one</button>
                    </div>
                </div>
                )
        }
    </>
  )
}

export default JokeByCategory