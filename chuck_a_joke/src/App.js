import './App.css';
import { Landing } from './components/landing/landing';
import SideBar from './components/sidebar/sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JokeByCategory from './components/getJokeByCategory/getJokeByCategory';
import GetJokeBySearch from './components/getJokeBySearch/getJokeBySearch';
import JokeSearchError from './components/getJokeBySearch/jokeSearchError';
import LikedJokes from './components/likedJokes/likedJokes';
import DislikedJokes from './components/dislikedJokes/dislikedJokes';
import { Provider } from 'react-redux';
import store from './redux/store';
import SearchHistory from './components/searchHistory/searchHistory';
import Error404 from './components/error/Error404';
function App() {
  return (
    <Provider store={store}>
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
          <Route path ="/history" element={<SearchHistory/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
