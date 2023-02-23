import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './displayCategories.css'
const DisplayCategories = () => {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json())
        .then(data => setCategories(data))
        .catch((error) => {
            console.log(error);
        })
    }, [])

  return (
    <div className='displayCategories'>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Show a Joke By Category
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>
                            <ul>
                                {categories === null ? null : categories.map((category,index) => {
                                    return (
                                        <li key = {index}>
                                            <Link to = {`/jokeByCategory/${category}`}>{category}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DisplayCategories