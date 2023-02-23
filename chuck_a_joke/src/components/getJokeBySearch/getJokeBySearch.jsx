import React, { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import './getJokeBySearch.css'
import chuck from '../../assets/images/chuck.svg'
const GetJokeBySearch = () => {

  const {searchQuery} = useParams();
  console.log("inside getJokeBySearch");
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/search?query=${searchQuery}`)
    .then(response => response.json())
    .then(data => setResults([...data.result]))
    .catch((error) => {
        console.log(error);
    })
  },[searchQuery])

    return (
      <div>
      {results && (
        <div className='jokes-container'>
          <h1>Jokes fetched as per your search results</h1>
          <div className='cards'>
            {results.map(({id, value}) => {
              return (
                <div className="card" style={{width: "18rem"}} key= {id}>
                  <img src= {chuck} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text" style={{fontFamily: "monospace" , fontSize: "17px"}}>{value}</p>
                    <button type="button" className="btn btn-primary btn-lg" style={{marginRight: "20px"}}>Like</button>
                    <button type="button" className="btn btn-danger btn-lg">Dislike</button>
                  </div>
                </div>
              )
            })}
          </div> 
        </div>
      )}
      </div>
  )
}

export default GetJokeBySearch