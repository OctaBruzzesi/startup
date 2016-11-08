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
      localStorage.setItem("movieStorage", JSON.stringify(state));
      return(state)
    case REMOVE_MOVIE:
      state.splice(action.index, 1);
      localStorage.setItem("movieStorage", JSON.stringify(state));
      return(state)
    case EDIT_MOVIE:
      state[action.movie.id] = action.movie
      localStorage.setItem("movieStorage", JSON.stringify(state));
      return(state)
    default:
      return state
  }
}

export default handleMovies
