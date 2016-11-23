import { ADD_BOOKS, INITIALIZE_STATE } from './actions'

function handleBooks(state = {books: {}, favourites: []}, action) {
  switch (action.type) {
    case INITIALIZE_STATE:
      return state;

    case ADD_BOOKS:    
      return Object.assign({}, state, {
          books: action.book
     });

    default:
      return state
  }
}

export default handleBooks;
