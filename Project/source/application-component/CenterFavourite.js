import React from 'react';
import store from '../store';
import { removeFavourite } from '../Redux/actions';
import { connect } from 'react-redux';
import { handleBooks } from '../Redux/reducers';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class CenterFavourite extends React.Component {
  constructor (props) {
    super(props);

    this.renderItems = this.renderItems.bind(this);
  }

  render () {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Author</TableHeaderColumn>
            <TableHeaderColumn>Category</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.renderItems()}
        </TableBody>
      </Table>
    )
  }

  renderItems () {
    if(this.props.books.favourites != undefined)
    return this.props.books.favourites.map(this.renderItem.bind(this))
  }

  renderItem (item, index) {
    let authors, categories
    if(item.volumeInfo.authors !== undefined) {
      authors = item.volumeInfo.authors[0]
    } else {
      authors = 'WA'
    }
    if(item.volumeInfo.categories !== undefined) {
      categories = item.volumeInfo.categories[0]
    } else {
      categories = 'WA'
    }
    return (
      <TableRow index={index}>
        <TableRowColumn>{item.volumeInfo.title}</TableRowColumn>
        <TableRowColumn>{authors}</TableRowColumn>
        <TableRowColumn>{categories}</TableRowColumn>
        <TableRowColumn>
          <RaisedButton secondary="true" label="Delete" onClick={this.handleRemoveFavourite.bind(this, index)}>
          </RaisedButton>
        </TableRowColumn>
      </TableRow>
    )
  }

  handleRemoveFavourite (index) {
    store.dispatch(removeFavourite(index));
  }
}

function mapStateToProps (state) {
  return {
    books: state
  };
}

export default connect(mapStateToProps)(CenterFavourite);
