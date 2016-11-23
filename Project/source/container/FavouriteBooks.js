import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../application-component/Header';
import CenterFavourite from '../application-component/CenterFavourite';
import { connect } from 'react-redux';
import { handleBooks } from '../Redux/reducers';

class FavouriteBooks extends React.Component {
  constructor (props) {
    super(props);
    this.state = {books: {}}
  }

  render () {
    return (
      <MuiThemeProvider>
        <div className="main">
          <Header />
          <CenterFavourite books={this.props.books}/>
        </div>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps (state) {
  return {
    books: state
  };
}

export default connect(mapStateToProps)(FavouriteBooks);
