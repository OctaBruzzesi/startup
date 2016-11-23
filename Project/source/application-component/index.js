import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from '../store';
import Main from './Main';
import FavouriteBooks from '../container/FavouriteBooks'
import SearchBooks from '../container/SearchBooks';

class Application extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={Main} />
            <Route path='/SearchBooks' component={SearchBooks}/>
            <Route path='/FavouriteBooks' component={FavouriteBooks}/>
        </Router>
      </Provider>
    )
  }
}


ReactDOM.render(
  <Application />
  , document.getElementById('app'));
