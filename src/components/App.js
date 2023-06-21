import '../App.css';
import './Header';
import './Movie';
import './Search';
import { useEffect, useState } from 'react';
import Header from './Header';
import Movie from './Movie';
import Search from './Search';

function App() {

  const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"

  const [movies,setMovies] = useState([])
  const [loading,setLoading] = useState(true)
  
  useEffect(()=>{
    fetch(MOVIE_API_URL)
    .then(res => res.json())
    .then(result => {
      setMovies(result.Search)
      console.log(3333,movies)
      setLoading(false)
    });
    
  },[]);

  const search =(searchValue)=> {
    setLoading(true)
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
    .then(res => res.json())
    .then((data) => {
      setMovies(data.Search)
      setLoading(false)
      console.log(1111,movies)
    })
  }

  if(loading){
    return <div>loading...</div>
  }

  console.log(2222,movies)

  return (
    <div className="App">
      <Header />
      <Search search = {search}/>
      <div className='movies'>
        {movies.map((v,i) => {
          return(
            <Movie key = {i} Title = {v.Title} Poster = {v.Poster} Year = {v.Year}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
