import React from 'react';

class MovieList extends React.Component {
  constructor (props) {
    super(props);
    this.handleMovieFavouriteList = this.handleMovieFavouriteList.bind(this);
  }

  handleMovieFavouriteList (event) {
    console.log("aaa");
    if (this.props.onList) {
      this.props.onList(this.state);
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleMovieFavouriteList.bind(this)}>List Favourites Movies</button>
      </div>
    );
  }
};

export default MovieList;
