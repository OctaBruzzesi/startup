import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderSearch from './HeaderSearch';
import CenterSearch from './CenterSearch';
import Header from './Header';

class SearchBooks extends React.Component {
  constructor () {
    super();
    this.state = {books: {}}
  }

  render () {
    return (
      <MuiThemeProvider>
        <div className="main">
          <Header />
          <HeaderSearch onSubmit={this.handleBooks}/>
        </div>
      </MuiThemeProvider>
    )
  }

  handleBooks (books) {
    console.log("Search", books)
  }
  // <HeaderSearch />
  // <CenterSearch />
}

export default SearchBooks;
