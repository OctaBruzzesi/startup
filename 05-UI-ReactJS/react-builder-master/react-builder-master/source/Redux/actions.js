/*
 * action creators
 */

const ADD_MOVIE = 'add_movie';
const LIST_MOVIE = 'list_movie';
const EDIT_MOVIE = 'edit_movie';
const INITIALIZE_STATE = 'initialize_state'

export function addMovie(movie) {
  return {type: ADD_MOVIE, movie: movie }
}

export function listMovie() {
  return { type: LIST_MOVIE }
}

export function editMovie(text) {
  return { type: EDIT_MOVIE, text }
}

export function initializeState () {
  return { type: INITIALIZE_STATE}
}

export { ADD_MOVIE, LIST_MOVIE, EDIT_MOVIE, INITIALIZE_STATE };
