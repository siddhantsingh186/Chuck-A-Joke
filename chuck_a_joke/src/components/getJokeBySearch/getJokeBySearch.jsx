import React, { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import './getJokeBySearch.css'
import LoadingPage from '../loader/loadingPage';
import JokeCard from './JokeCard/JokeCard';
const GetJokeBySearch = () => {

  const {searchQuery} = useParams();
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/search?query=${searchQuery}`)
    .then(response => response.json())
    .then(data => setResults([...data.result]))
    .catch((error) => {
        console.log(error);
    })
  },[searchQuery])

  ///Write a code so that only the like and dislike button is enabled or disabled for a single card on which it is clikced

    return (
      <div>
        {results.length === 0 ? <LoadingPage /> :
          (
            <div className='jokes-container'>
              <h1>Jokes fetched as per your search results</h1>
              <div className='cards'>
                {results.map(({id, value}) => {
                  return (
                    <JokeCard value={value} key={id}/>
                  )
                })}
              </div> 
            </div>
          )
        }
      </div>
  )
}

export default GetJokeBySearch