import React from 'react';
import store from '../store';
import _ from 'lodash';
import { addFavourite } from '../Redux/actions';
import { connect } from 'react-redux';
import { handleBooks } from '../Redux/reducers';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class CenterSearch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {open: false, description: {}}
    this.renderItems = this.renderItems.bind(this);
  }

  render () {
    return (
      <div>
      <Table onCellClick={this.handleClick.bind(this)}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Author</TableHeaderColumn>
            <TableHeaderColumn>Category</TableHeaderColumn>
            <TableHeaderColumn>Favourite</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.renderItems()}
        </TableBody>
      </Table>
      <Drawer width={300} openSecondary={true} open={this.state.open}>
        {this.renderDescription()}
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
      authors = 'UA'
    }
    if(item.volumeInfo.categories !== undefined) {
      categories = item.volumeInfo.categories[0]
    } else {
      categories = 'UC'
    }
    return (
      <TableRow index={index}>
        <TableRowColumn>{item.volumeInfo.title}</TableRowColumn>
        <TableRowColumn>{authors}</TableRowColumn>
        <TableRowColumn>{categories}</TableRowColumn>
        <TableRowColumn>
          <RaisedButton secondary={true} onClick={this.handleAddFavourite.bind(this, index)}>
            +<ActionGrade />
          </RaisedButton>
        </TableRowColumn>
      </TableRow>
    )
  }

  handleAddFavourite (index) {
    let bookFavourite = this.props.books.books.books.items[index];
    if(_.intersection(this.props.books.favourites, [bookFavourite]).length === 0) {
      store.dispatch(addFavourite(bookFavourite))
    } else {
      alert('That book is already on favourites')
    }
  }

  handleClick (rowNumber, columnNumber, evt) {
    if(columnNumber !== 4) {
      console.log("Estoy", columnNumber);
      this.setState({open: !this.state.open, description: this.props.books.books.books.items[rowNumber]});
    }
  }

  renderDescription () {
    console.log(this.state.description)
    let renderComponent = null;
    let book = this.state.description
    let authors;
    console.log("Open search", this.state.open)
    if (this.state.open) {
      if (book.volumeInfo.authors !== undefined) {
        authors = book.volumeInfo.authors.map(function (authors) {
          return `${authors}\n`
        })
      } else {
        authors = 'Unknown author';
      }
      renderComponent = (
        <div className="drawer-description">
          <div className="drawer-description-header">
            <p className="drawer-description-title"> {book.volumeInfo.title} </p>
          </div>
          <img src={book.volumeInfo.imageLinks.thumbnail} />
          <p> {authors} </p>
          <p> {book.volumeInfo.description} </p>
          <p className="drawer-description-link"><a href={book.volumeInfo.previewLink}> Book Preview </a></p>
        </div>
      );
    }
    return renderComponent
  }
}

function mapStateToProps (state) {
  return {
    books: state
  };
}

export default connect(mapStateToProps)(CenterSearch);
