import React , {useState} from 'react'
import './sidebar.css'
import TextField from '@mui/material/TextField';
import DisplayCategories from '../categories/displayCategories';
import SearchIcon from '@mui/icons-material/Search';
import { Link, NavLink } from 'react-router-dom';
const SideBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    }
 

  return (
    <div className='sideBar'>
        <div className='searchBar'>
            <TextField id="outlined-search" label="Search by keywords" type="search" style={{marginTop: "163px"}} onChange = {handleChange}/>
            <div className='searchIcon'>
                {searchQuery === '' ? 
                    (
                        <Link to = {'/search/empty'} style = {{textDecoration: 'none', color: 'white'}}>
                            <SearchIcon fontSize='large' />
                        </Link>
                    )
                    :
                    (
                    <Link to = {`/search/${searchQuery}`} style={{textDecoration: 'none', color: 'white'}}>
                        <SearchIcon fontSize='large' />
                    </Link>
                    ) 
                }
            </div>
        </div>
        <DisplayCategories />
        <div className='sidebarButtons'>
            <NavLink to = {'/likedJokes'}>
                <button type="button" className="btn btn-primary btn-lg">View Likes</button>
            </NavLink>
            <NavLink to = {'/dislikedJokes'}>
                <button type="button" className="btn btn-danger btn-lg">View Dislikes</button>
            </NavLink>
        </div>
    </div>
  )
}

export default SideBar