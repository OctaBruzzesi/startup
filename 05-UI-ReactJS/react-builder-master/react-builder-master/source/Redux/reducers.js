import { ADD_MOVIE, LIST_MOVIE, EDIT_MOVIE, INITIALIZE_STATE } from './actions'

function handleMovies(state = [ { movies: {} } ], action) {
  let movies = JSON.parse(localStorage.getItem("movieStorage")) || [];
  switch (action.type) {
    case INITIALIZE_STATE:
      state = movies;
    case ADD_MOVIE:
      state.push(action.movie);
      console.log('es' + state)
      // movies.push(action.movie)
      // console.log(movies)
      // localStorage.setItem("movieStorage", JSON.stringify(movies));
      // return state;
    case LIST_MOVIE:
    case EDIT_MOVIE:
    default:
      return state
  }
}

export default handleMovies
