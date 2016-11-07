import { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE, INITIALIZE_STATE } from './actions'

function handleMovies(state = [ { movies: {} } ], action) {
  let movies = JSON.parse(localStorage.getItem("movieStorage")) || [];
  switch (action.type) {
    case INITIALIZE_STATE:
      state = movies;
      console.log(state)
      return(state);
    case ADD_MOVIE:
      state.push(action.movie);
      console.log("a")
      // localStorage.setItem("movieStorage", JSON.stringify(state));
      return(state)
    case REMOVE_MOVIE:
      console.log(state.length);
      return(state.length)
    case EDIT_MOVIE:
      console.log(action.movie, action.index)
      state[action.index] = action.movie
      console.log(state);
      break;
    default:
      return state
  }
}

export default handleMovies
