import {useEffect, useState} from "react";
import Movie from "./Movie";


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
                  movies.map(movie => (
                      <Movie
                          id={movie.id}
                          coverImage={movie.medium_cover_image}
                          url={movie.url}
                          title={movie.title}
                          summary={movie.summary}
                          rating={movie.rating}
                          genres={movie.genres}
                      />
                  ))
              }
          </div>
      </div>
  );
}

export default App;
