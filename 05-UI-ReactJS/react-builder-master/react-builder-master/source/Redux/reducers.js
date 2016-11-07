import { ADD_MOVIE, LIST_MOVIE, EDIT_MOVIE, INITIALIZE_STATE } from './actions'

function handleMovies(state = [ { movies: {} } ], action) {
  let movies = JSON.parse(localStorage.getItem("movieStorage")) || [];
  switch (action.type) {
    case INITIALIZE_STATE:
      state = movies;
      console.log(state)
      return(state);
    case ADD_MOVIE:
      state.push(action.movie);
      localStorage.setItem("movieStorage", JSON.stringify(state));
      return(state)
      // return state;
    case LIST_MOVIE:
      console.log(state);
      break;
    case EDIT_MOVIE:
    default:
      return state
  }
}

export default handleMovies
