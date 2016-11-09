import React from 'react'
import ReactDOM from 'react-dom'
import Application from './Application'
import { handleMovies } from './Redux/reducers';
import {initializeState} from './Redux/actions';
import store from './store';

store.dispatch(initializeState());

ReactDOM.render(
  <Application />
  , document.getElementById('app'));
