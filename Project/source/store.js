import handleBooks from './Redux/reducers.js';
import { createStore } from 'redux';

let store = createStore(handleBooks);
export default store
