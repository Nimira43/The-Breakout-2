import { createRandomMovie } from '../data'

function MoviePlaylist() {
  const moviePlaylist = []
  const handleMovieAdd = (movie) => {

  }
  const handleMovieRemove = (movie) => {

  }
  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className='button is-danger'
        >
          X
        </button>
      </li>
    )
  })

  return (
    <div className="content">
      <div className="table-header">
        <h3 className='subtitle is-3'>Movie PlayList</h3>
        <div className="buttons">
          <button 
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            Add Movie
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  )
}

export default MoviePlaylist