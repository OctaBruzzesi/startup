import React from 'react';
import _ from 'lodash';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../application-component/Header';
import CenterFavourite from '../application-component/CenterFavourite';
import Const from '../util/const';
import { connect } from 'react-redux';
import { handleBooks } from '../Redux/reducers';

class FavouriteBooks extends React.Component {
  constructor (props) {
    super(props);
    this.state = {books: {}}

    this.getRecomendations = this.getRecomendations.bind(this);
  }

  render () {
    return (
      <MuiThemeProvider>
        <div className="main">
          <Header />
          <CenterFavourite books={this.props.books}/>
          {this.getRecomendations()}
        </div>
      </MuiThemeProvider>
    )
  }

  getRecomendations () {
    let fav = this.props.books.favourites;
    let recomendations = [];
    if (fav.length !== 0) {
      console.log("Categoria", fav[0].volumeInfo.categories[0])
      this.ajaxCall(fav[0].volumeInfo.categories[0])
    }
    console.log("Favoritos", fav)
  }

  ajaxCall (a) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", `https://www.googleapis.com/books/v1/volumes?q=subject:${a}&key=${Const.API_KEY}`, true);
    xhttp.onreadystatechange = function(event) {
      if (xhttp.readyState === XMLHttpRequest.DONE) {
         let response = JSON.parse(event.target.response);
         console.log(response);
      }
    }.bind(this);
    xhttp.send();
  }
}

function mapStateToProps (state) {
  return {
    books: state
  };
}

export default connect(mapStateToProps)(FavouriteBooks);
