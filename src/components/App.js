import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async ()  => {
        const response = await (
            await fetch('https://yts.mx/api/v2/list_movies.json?maximum_rating=8.8&sort_by=rating')
        ).json();
        setMovies(response.data.movies);
        setLoading(false);
    }
    useEffect(() => getMovies(), [])
  return (
      <div>
          {loading ? <h1>Loading...</h1> : null}
          <div>
              {
                  movies.map(movie => <div key={movie.id}>
                      <div>
                          <img src={movie.medium_cover_image} />
                      </div>
                      <h2><a href={movie.url}>{movie.title}</a></h2>
                      <p>{movie.summary}</p>
                      <b>Rating : {movie.rating}</b>
                      <ul>
                          {movie.genres.map((genre) => <li key={genre}>{genre}</li>)}
                      </ul>
                  </div>)
              }
          </div>
      </div>
  );
}

export default App;
