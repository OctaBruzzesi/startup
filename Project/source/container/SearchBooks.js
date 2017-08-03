import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderSearch from '../application-component/HeaderSearch';
import CenterSearch from '../application-component/CenterSearch';
import Header from '../application-component/Header';
import { connect } from 'react-redux';
import { handleBooks } from '../Redux/reducers';

class SearchBooks extends React.Component {
  constructor (props) {
    super(props);
    this.state = {books: {}}
  }

  render () {
    return (
      <MuiThemeProvider>
        <div className="main">
          <Header />
          <HeaderSearch />
          <CenterSearch books={this.props.books}/>
        </div>
      </MuiThemeProvider>
    )
  }

  handleBooks () {
  }
}

function mapStateToProps (state) {
  return {
    books: state
  };
}

export default connect(mapStateToProps)(SearchBooks);
