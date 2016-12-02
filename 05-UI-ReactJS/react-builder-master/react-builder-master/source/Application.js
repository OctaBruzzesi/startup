import React from 'react'
import Movie from './Movie'
import {initializeState} from './Redux/actions';
import MoviesHandler from './MoviesHandler';
import MovieInput from './MovieInput';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import store from './store';

store.dispatch(initializeState());

class Application extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Movie} />
            <Route path='/MovieInput/(:movieID)' component={MovieInput} />
            <Route path='/MoviesHandler' component={MoviesHandler} />
          <Route path='*' component={NotFound} />
        </Router>
      </Provider>
    )
  }
}
const NotFound = () => (
<h1>404.. This page is not found!</h1>)

export default Application;
