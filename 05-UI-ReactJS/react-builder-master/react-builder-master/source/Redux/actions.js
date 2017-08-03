/*
 * action creators
 */

const ADD_MOVIE = 'add_movie';
const REMOVE_MOVIE = 'remove_movie';
const EDIT_MOVIE = 'edit_movie';
const INITIALIZE_STATE = 'initialize_state'

function addMovie(movie) {
  return {type: ADD_MOVIE, movie: movie }
}

function removeMovie(index) {
  return { type: REMOVE_MOVIE, index }
}

function editMovie(movie, index) {
  return { type: EDIT_MOVIE, movie, index }
}

function initializeState () {
  return { type: INITIALIZE_STATE}
}

export { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE, INITIALIZE_STATE, addMovie, removeMovie, editMovie, initializeState };
