
/*
 * action creators
 */

const ADD_BOOKS = 'add_books';
const ADD_FAVOURITE = 'add_favourite';
const REMOVE_FAVOURITE = 'remove_favourite';
const INITIALIZE_STATE = 'initialize_state'

export function addBooks (book) {
  return {type: ADD_BOOKS, book: book }
}

export function addFavourite (book) {
  return { type: ADD_FAVOURITE, book:book}
}

export function removeFavourite (index) {
  return { type: REMOVE_FAVOURITE, index: index}
}

export function initializeState () {
  return { type: INITIALIZE_STATE}
}

export { ADD_BOOKS, ADD_FAVOURITE, REMOVE_FAVOURITE, INITIALIZE_STATE };
