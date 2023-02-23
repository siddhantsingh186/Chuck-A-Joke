import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import './getJokeByCategory.css'
const JokeByCategory = () => {
    const {category} = useParams();
    const [categoryJoke, setCategoryJoke] = useState(null);
    useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(response => response.json())
        .then(data => setCategoryJoke(data.value))
        .catch((error) => {
            console.log(error);
        })
    }, [category])

    const handleChange = () => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(response => response.json())
        .then(data => setCategoryJoke(data.value))
        .catch((error) => {
            console.log(error);
        })
    }
  return (
    <div className='jokeByCategory'>
        <p style={{fontSize : "18px", fontWeight: "800"}}>Here is a fresh joke for you in {category} category</p>
        <p className='joke'>{categoryJoke}</p> 
        {categoryJoke === null ? null :
            <div className="displayButtons">
                <button type="button" className="btn btn-primary btn-lg">Like</button>
                <button type="button" className="btn btn-danger btn-lg">Dislike</button>
                <button type="button" className="btn btn-secondary btn-lg" onClick = {handleChange}>Give me a new one</button>
            </div>
        }
    </div>
  )
}

export default JokeByCategory