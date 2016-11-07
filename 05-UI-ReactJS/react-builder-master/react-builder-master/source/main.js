import React from 'react'
// import Router from 'react-router'
// import Route from 'react-router'
// import Link from 'react-router'
import ReactDOM from 'react-dom'
import Application from './Application'
import { handleMovies } from './Redux/reducers';
import {initializeState} from './Redux/actions';
import store from './store';

console.log("eeeee1123")
store.dispatch(initializeState())

ReactDOM.render(
  <Application />
  , document.getElementById('app'))
