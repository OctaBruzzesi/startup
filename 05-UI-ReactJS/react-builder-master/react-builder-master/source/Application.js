import React, { Component } from 'react'
import Movie from './Movie'
import MovieList from './MovieList';
import MovieInput from './MovieInput';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import store from './store';

class Application extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Movie} />
            <Route path='/MovieInput/(:movieID)' component={MovieInput} handler={MovieInput}/>
            <Route path='/MoviesHandler' component={MovieList} />
          <Route path='*' component={NotFound} />
        </Router>
      </Provider>
    )
  }
}
const NotFound = () => (
<h1>404.. This page is not found!</h1>)

const mapStateToProps = (state) => {
  return {
    todos: App(state.movie)
  }
}

export default Application;
