import './App.css';
import { Landing } from './components/landing/landing';
import SideBar from './components/sidebar/sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JokeByCategory from './components/getJokeByCategory/getJokeByCategory';
import GetJokeBySearch from './components/getJokeBySearch/getJokeBySearch';
import JokeSearchError from './components/getJokeBySearch/jokeSearchError';
import LikedJokes from './components/likedJokes/likedJokes';
import DislikedJokes from './components/dislikedJokes/dislikedJokes';
function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/jokeByCategory/:category" element={<JokeByCategory />} />
          <Route path="/search/empty" element={<JokeSearchError/>} />
          <Route path ="/search/:searchQuery" element={<GetJokeBySearch />} />
          <Route path ="/likedJokes" element={<LikedJokes />} />
          <Route path ="/dislikedJokes" element={<DislikedJokes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
