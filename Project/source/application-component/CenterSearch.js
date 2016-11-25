import React from 'react';
import store from '../store';
import _ from 'lodash';
import { addFavourite } from '../Redux/actions';
import { connect } from 'react-redux';
import { handleBooks } from '../Redux/reducers';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class CenterSearch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {open: false}
    this.renderItems = this.renderItems.bind(this);
  }

  render () {
    return (
      <div>
      <Table onCellClick={this.handleClick.bind(this)}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Author</TableHeaderColumn>
            <TableHeaderColumn>Category</TableHeaderColumn>
            <TableHeaderColumn>Favourite</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.renderItems()}
        </TableBody>
      </Table>
      <Drawer width={200} openSecondary={true} open={this.state.open} >
          asd
      </Drawer>
      </div>
    )
  }

  renderItems () {
    if(this.props.books.books.books !== undefined)
    return this.props.books.books.books.items.map(this.renderItem.bind(this))
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
          <RaisedButton onClick={this.handleAddFavourite.bind(this, index)}>
            +<ActionGrade />
          </RaisedButton>
        </TableRowColumn>
      </TableRow>
    )
  }

  handleAddFavourite (index) {
    let bookFavourite = this.props.books.books.books.items[index];
    this.setState({ open: true})
    if(_.intersection(this.props.books.favourites, [bookFavourite]).length === 0) {
      store.dispatch(addFavourite(bookFavourite))
    } else {
      alert('That book is already on favourites')
    }
  }

  handleClick () {
    this.setState({open: true});
  }
}

function mapStateToProps (state) {
  return {
    books: state
  };
}

export default connect(mapStateToProps)(CenterSearch);
