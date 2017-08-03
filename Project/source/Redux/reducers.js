import { ADD_BOOKS, ADD_FAVOURITE, REMOVE_FAVOURITE, INITIALIZE_STATE } from './actions'

function handleBooks(state = {books: {}, favourites: []}, action) {
  switch (action.type) {
    case INITIALIZE_STATE:
      return state;

    case ADD_BOOKS:
      return Object.assign({}, state, {
          books: action.book
     });

     case ADD_FAVOURITE:
      state.favourites.push(action.book)
      return state;

    case REMOVE_FAVOURITE:
      let i = action.index;
      return state = {books : state.books, favourites : state.favourites.filter(function (state, indexFavourite) {
        return indexFavourite !== i
      }, i)}
    default:
      return state
  }
}

export default handleBooks;
