import React from 'react';
import store from '../store';
import { removeFavourite } from '../Redux/actions';
import { connect } from 'react-redux';
import { handleBooks } from '../Redux/reducers';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class CenterFavourite extends React.Component {
  constructor (props) {
    super(props);
    this.state = ({openSnackBar: false, openDrawer: false, description: {}});
    this.renderItems = this.renderItems.bind(this);
    this.getSnackBarProps = this.getSnackBarProps.bind(this);
  }

  componentWillMount () {
    if(this.props.books.favourites.length !== 0) {
      setTimeout(function() {
        this.setState({
          openSnackBar: true,
          openDrawer: this.state.openDrawer,
          description: this.state.description
        });
      }.bind(this), 3000);
    }
  }

  render () {
    return (
      <div>
      <Table onCellClick={this.handleClick.bind(this)}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
          <TableRow>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Author</TableHeaderColumn>
            <TableHeaderColumn>Category</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} >
          {this.renderItems()}
        </TableBody>
      </Table>
      <Snackbar {...this.getSnackBarProps()}/>
      <Drawer width={300} openSecondary={true} open={this.state.openDrawer}>
        {this.renderDescription()}
      </Drawer>
      </div>
    )
  }

  getSnackBarProps () {
    return {
      open: this.state.openSnackBar,
      message: this.getRecommendations(),
      autoHideDuration: 10000,
    }
  }

  getRecommendations () {
    let recommendations;
    let recommendationsArray = this.props.recommendations;
    if(recommendationsArray.length !== 0) {
      let random = Math.floor(Math.random() * recommendationsArray.length)
      recommendations = `Book recommended: ${recommendationsArray[random].volumeInfo.title}`;
    }
    console.log(recommendations);
    return recommendations;
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
          <RaisedButton secondary="true" label="Delete" onClick={this.handleRemoveFavourite.bind(this, index)}>
          </RaisedButton>
        </TableRowColumn>
      </TableRow>
    )
  }

  handleRemoveFavourite (index) {
    store.dispatch(removeFavourite(index));
  }

  handleClick (rowNumber, columnNumber, evt) {

    if(columnNumber !== 4) {
      this.setState({
        openSnackBar: false,
        openDrawer: !this.state.openDrawer,
        description: this.props.books.favourites[rowNumber]});
    }
  }

  renderDescription () {
    console.log("Descripcion", this.state.description)
    let renderComponent = null;
    let book = this.state.description
    let authors;
    console.log("Open", this.state.openDrawer)
    if (this.state.openDrawer) {
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

export default connect(mapStateToProps)(CenterFavourite);
