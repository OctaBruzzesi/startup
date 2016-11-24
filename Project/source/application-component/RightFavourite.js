import React from 'react';
import store from '../store';
import { removeFavourite } from '../Redux/actions';
import { connect } from 'react-redux';
import { handleBooks } from '../Redux/reducers';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class RightFavourite extends React.Component {
  constructor (props) {
    super(props);

  }

  render () {
    return (
      <p />
    );
  }
}

export default RightFavourite
