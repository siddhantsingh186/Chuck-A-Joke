import React , {useState} from 'react'
import './sidebar.css'
import TextField from '@mui/material/TextField';
import DisplayCategories from '../categories/displayCategories';
import SearchIcon from '@mui/icons-material/Search';
import { Link, NavLink } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addSearchQuery } from '../../redux/actions';
import HomeIcon from '@mui/icons-material/Home';
const SideBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();
    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    }
    
    const handleClick = () => {
        dispatch(addSearchQuery(searchQuery));
    }


  return (
    <div className='sideBar'>
        <div className = 'homeIcon'>
            <Link to = {'/'} style = {{textDecoration: 'none', color: 'black'}}>
                <button type="button" className="btn btn-primary btn-lg">Home <HomeIcon fontSize='large' style={{paddingBottom : "6px"}}/></button>
            </Link>
        </div>
        <div className='searchBar'>
            <TextField id="outlined-search" label="Search by keywords" type="search" style={{marginTop : "72px"}} 
                onChange = {handleChange}
                />
            <div className='searchIcon'>
                {searchQuery === '' ? 
                    (
                        <Link to = {'/search/empty'} style = {{textDecoration: 'none', color: 'white'}}>
                            <SearchIcon fontSize='large' onClick={handleClick}/>
                        </Link>
                    )
                    :
                    (
                    <Link to = {`/search/${searchQuery}`} style={{textDecoration: 'none', color: 'white'}}>
                        <SearchIcon fontSize='large' onClick={handleClick}/>
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
            <NavLink to = {'/history'}>
                <button type="button" className="btn btn-secondary btn-lg">View History</button>
            </NavLink>
        </div>
    </div>
  )
}

export default SideBar