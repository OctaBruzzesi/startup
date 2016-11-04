import handleMovies from './Redux/reducers.js';
import { createStore } from 'redux';

let store = createStore(handleMovies);
export default store
