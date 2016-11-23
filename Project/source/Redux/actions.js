
/*
 * action creators
 */

const ADD_BOOKS = 'add_books';
const INITIALIZE_STATE = 'initialize_state'

export function addBooks(book) {
  return {type: ADD_BOOKS, book: book }
}

export function initializeState () {
  return { type: INITIALIZE_STATE}
}

export { ADD_BOOKS, INITIALIZE_STATE };
