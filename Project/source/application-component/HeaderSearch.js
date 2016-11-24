import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Const from '../util/const';
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
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render () {
    return (
      <div className="main">
        <TextField  {...this.getTfProps()}/>
        <RaisedButton {...this.getButtonProps()}/>
      </div>
    )
  }

  getButtonProps () {
    return {
      label: "Default",
      primary: true,
      onClick: this.handleClick,
      style: style.buttonStyle
    }
  }

  getTfProps () {
    return {
      onChange: this.handleChangeSearch,
      floatingLabelText: "Search Books",
      floatingLabelStyle: style.floatingLabelStyle,
      textareaStyle: style.underlineStyle,
      underlineFocusStyle: style.underlineFocusStyle,
      underlineStyle: style.underlineStyle,
      type: "text",
    }

  }

  handleClick () {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&key=${Const.API_KEY}`, true);
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
