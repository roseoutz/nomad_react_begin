const Movie = ({id, coverImage, url, title, summary, rating, genres}) => {
    return <div key={id}>
        <div>
            <img src={coverImage} alt={title} />
        </div>
        <h2><a href={url}>{title}</a></h2>
        <p>{summary}</p>
        <b>Rating : {rating}</b>
        <ul>
            {genres.map((genre) => <li key={genre}>{genre}</li>)}
        </ul>
    </div>;
}

export default Movie;