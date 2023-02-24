import React from 'react'
import { useSelector} from 'react-redux'
import './likedJokes.css'
import MoodIcon from '@mui/icons-material/Mood';
import Error from '../error/Error';
const LikedJokes = () => {
    const state = useSelector(state => state);
    const likedJokes = state.likedJokes;
    return (
        <>
        {likedJokes.length === 0 ? <Error/> : 
            (
                <div className="likedJokes">
                <h1 className="display-4" style={{color: "Blue", marginTop: "60px"}}>Liked Jokes</h1>
                {likedJokes.map((joke,index) =>(
                    <div className="callout-like" key={index}>
                        {joke} <MoodIcon style={{color: "darkblue"}}/>
                    </div>
                ))}
                </div>
            )
        }
        </>
    )
}


export default LikedJokes