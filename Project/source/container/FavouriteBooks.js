import React from 'react';
import _ from 'lodash';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../application-component/Header';
import CenterFavourite from '../application-component/CenterFavourite';
import RightFavourite from '../application-component/RightFavourite';
import Const from '../util/const';
import { connect } from 'react-redux';
import { handleBooks } from '../Redux/reducers';

class FavouriteBooks extends React.Component {
  constructor (props) {
    super(props);
    this.state = {recommendations: []}

    this.getRecommendations = this.getRecommendations.bind(this);
  }

  componentWillMount () {
    this.getRecommendations();
  }

  render () {
    return (
      <MuiThemeProvider>
        <div className="main">
          <Header />
          <CenterFavourite books={this.props.books} recommendations={this.state.recommendations}/>
          <RightFavourite recommendations={this.state.recommendations} />
        </div>
      </MuiThemeProvider>
    )
  }

  getRecommendations () {
    let fav = this.props.books.favourites;
    let recommendations = [];
    let i, maxLength;
    let authors = [];
    let categories = [];

    if(fav.length > 2) {
      maxLength = 2;
    } else {
      maxLength = fav.length;
    }
    if (fav.length !== 0) {
      for(i=0; i<fav.length; i++) {
        if(fav[i].volumeInfo.authors !== undefined) {
          console.log('Estoy', fav[i].volumeInfo.authors[0])
          authors.push(fav[i].volumeInfo.authors[0]);
        } else {
          authors.push('')
        }
        if(fav[i].volumeInfo.categories !== undefined) {
          categories.push(fav[i].volumeInfo.categories[0])
        } else {
          categories.push('');
        }
        this.ajaxCall(categories[i], authors[i]);
      }

    }
    console.log("Favoritos", fav)
  }

  ajaxCall (a, b) {
    let xhttp = new XMLHttpRequest();
    console.log("Recomendaciones", a, b)
    xhttp.open("GET", `https://www.googleapis.com/books/v1/volumes?q=subject:${a}&inauthor:${b}&key=${Const.API_KEY}`, true);
    xhttp.onreadystatechange = function(event) {
      if (xhttp.readyState === XMLHttpRequest.DONE) {
         let response = JSON.parse(event.target.response);
         console.log("Libro", response)
         let fav = this.state.recommendations.slice();
         fav.push(response.items[0]);
         this.setState({recommendations: fav});
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
