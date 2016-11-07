/*
 * action creators
 */

const ADD_MOVIE = 'add_movie';
const REMOVE_MOVIE = 'remove_movie';
const EDIT_MOVIE = 'edit_movie';
const INITIALIZE_STATE = 'initialize_state'

export function addMovie(movie) {
  return {type: ADD_MOVIE, movie: movie }
}

export function removeMovie() {
  return { type: REMOVE_MOVIE }
}

export function editMovie(movie, index) {
  return { type: EDIT_MOVIE, movie, index }
}

export function initializeState () {
  return { type: INITIALIZE_STATE}
}

export { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE, INITIALIZE_STATE };
