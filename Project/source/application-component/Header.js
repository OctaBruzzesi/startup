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
      <Toolbar style={{backgroundColor: '#4CAF50', height: '75px'}} className="header">
        <Link to='/SearchBooks'><RaisedButton label="Search Books"/></Link>
        <Link to='/FavouriteBooks'><RaisedButton label='Favourites'/></Link>
        <RaisedButton />
      </Toolbar>
    )
  }
}

export default Header;
