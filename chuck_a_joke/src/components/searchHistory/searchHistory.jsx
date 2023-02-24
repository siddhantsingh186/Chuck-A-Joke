import React from 'react'
import { useSelector} from 'react-redux'
import Error from '../error/Error';
import './searchHistory.css'
const SearchHistory = () => {
    const state = useSelector(state => state);
    const searchHistory = state.searchHistory;
    console.log(searchHistory);
    return (
        <>
            {searchHistory.length === 0 ? <Error/> :
                (
                    <div className="searchHistory">
                    <h1 className="display-4" style={{color: "Black", marginTop: "60px"}}>Search History</h1>
                    {searchHistory.map((query,index) =>(
                        <div className="callout" key={index}>
                            {query}
                        </div>
                    ))}
                </div>
                )
            }
        </>
    )
}

export default SearchHistory