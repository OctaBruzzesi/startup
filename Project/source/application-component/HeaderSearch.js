import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { addBooks } from '../Redux/actions';
import { connect } from 'react-redux';
import { handleBooks } from '../Redux/reducers';
import store from '../store';

const style = {
  buttonStyle: {
    color: "#F44336"
  },
  floatingLabelStyle: {
    color: "#000000",
  },
  underlineFocusStyle: {
    borderColor: "#F44336",
  },
  underlineStyle: {
    borderColor: "#000000",
  }
}

class HeaderSearch extends React.Component {
  constructor () {
    super();
    this.state= {search: "", books: {}}
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render () {
    return (
      <div className="main">
        <TextField  {...this.getTfProps("Search Books")}/>
        <RaisedButton {...this.getButtonProps("books")}/>
        <TextField {...this.getTfProps("Search Authors")} />
        <RaisedButton {...this.getButtonProps("authors")}/>
      </div>
    )
  }

  getButtonProps (type) {
    return {
      className: type,
      label: 'Search',
      primary: true,
      onClick: this.handleClick.bind(this, type),
      style: style.buttonStyle
    }
  }

  getTfProps (label) {
    return {
      className: "textField-search",
      onChange: this.handleChangeSearch,
      floatingLabelText: label,
      floatingLabelStyle: style.floatingLabelStyle,
      textareaStyle: style.underlineStyle,
      underlineFocusStyle: style.underlineFocusStyle,
      underlineStyle: style.underlineStyle,
      type: "text",
    }
  }

  handleClick (searchType) {
    let xhttp = new XMLHttpRequest();
    let url = '';
    if (searchType === "books") {
      url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&key=${Const.API_KEY}`
    } else {
      url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${this.state.search}&key=${Const.API_KEY}`
    }
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function(event) {
      if (xhttp.readyState === XMLHttpRequest.DONE) {
         let response = JSON.parse(event.target.response);
         this.handleSubmit(response);
      }
    }.bind(this);
    xhttp.send();
   }

   handleChangeSearch (event) {
     this.setState({search: event.target.value})
   }

   handleSubmit (response) {
     this.setState({search: this.state.search, books: response});
     store.dispatch(addBooks(this.state))
   }
};

function mapStateToProps (state) {
  return {
    books: state
  };
}

export default connect(mapStateToProps)(HeaderSearch);
