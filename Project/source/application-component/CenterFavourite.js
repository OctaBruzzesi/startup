import React from 'react';
import store from '../store';
import { removeFavourite } from '../Redux/actions';
import { connect } from 'react-redux';
import { handleBooks } from '../Redux/reducers';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class CenterFavourite extends React.Component {
  constructor (props) {
    super(props);
    this.state = ({open: false});
    this.renderItems = this.renderItems.bind(this);
    this.getSnackBarProps = this.getSnackBarProps.bind(this);
  }

  componentWillMount () {
    setTimeout(function() { this.setState({open: true}); }.bind(this), 3000);
  }

  render () {
    return (
      <div>
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
      <Snackbar {...this.getSnackBarProps()}
        />
      </div>
    )
  }

  getSnackBarProps () {
    return {
      open: this.state.open,
      message: this.getRecommendations(),
      autoHideDuration: 10000,
      onRequestClose: this.handleRequestClose.bind(this)
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

  handleRequestClose () {
    this.setState({ open:false });
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
