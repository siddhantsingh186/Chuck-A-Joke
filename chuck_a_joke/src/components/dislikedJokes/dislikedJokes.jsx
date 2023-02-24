import React from 'react'
import { useSelector} from 'react-redux'
import './dislikedJokes.css'
import MoodIcon from '@mui/icons-material/Mood';
import Error from '../error/Error';
const DislikedJokes = () => {
    const state = useSelector(state => state);
    const dislikedJokes = state.dislikedJokes;
    return (
        <>
        {dislikedJokes.length === 0 ? <Error/> :
            (
                <div className="dislikedJokes">
                    <h1 className="display-4" style={{color: "Red", marginTop: "60px"}}>Disliked Jokes</h1>
                    {dislikedJokes.map((joke,index) =>(
                        <div className="callout-dislike" key={index}>
                            {joke} <MoodIcon style={{color: "darkblue"}}/>
                        </div>
                    ))}
                </div>
            )
        }
        </>
    )
}

export default DislikedJokes