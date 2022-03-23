import React, { useState, useEffect } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading,setLoading] = useState(false);
  const [error,setError] = useState(null);

  useEffect(()=>{
    fetchMoviesHandler();
  },[])

  async function fetchMoviesHandler() {
    try{
    setLoading(true);
    const res = await fetch('https://swapi.dev/api/films');
    if(!res.ok){
      throw new Error('Something went wrong');
    }
    const data = await res.json();
    const transformedData = data.results.map(movieData => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date
      }
    });
    setMovies(transformedData);
    }catch(error){
      setError(error.message);
    }
    setLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading.....Please Wait.</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
