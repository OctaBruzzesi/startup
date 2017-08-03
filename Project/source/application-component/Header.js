import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class Header extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div>
        <img src='BOOKSIFY.jpg' className="logo"/>
        <Toolbar style={{backgroundColor: '#4CAF50', height: '75px'}} className="header">
          <Link className="link" to='/SearchBooks'>SEARCH BOOKS</Link>
          <Link className="link" to='/FavouriteBooks'>FAVOURITES</Link>
        </Toolbar>
      </div>
    )
  }
}

export default Header;
