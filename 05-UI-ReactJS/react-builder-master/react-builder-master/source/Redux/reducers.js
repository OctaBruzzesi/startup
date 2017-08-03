import { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE, INITIALIZE_STATE } from './actions'

function handleMovies(state = [], action) {
  switch (action.type) {
    case INITIALIZE_STATE:
    state = JSON.parse(localStorage.getItem("movieStorage")) || []
      return state;
    case ADD_MOVIE:
      action.movie.id = state.length;
      state.push(action.movie);
      localStorage.setItem("movieStorage", JSON.stringify(state));
      return(state)
    case REMOVE_MOVIE:
      let index = action.index;
      state = state.filter(function (state) {
        return state.id !== index
      }, index)
      localStorage.setItem("movieStorage", JSON.stringify(state));
      return state;
    case EDIT_MOVIE:
      state[action.movie.id] = action.movie
      localStorage.setItem("movieStorage", JSON.stringify(state));
      return(state)
    default:
      return state
  }
}

export default handleMovies
