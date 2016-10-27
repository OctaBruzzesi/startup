import React from 'react';

class MovieList extends React.Component {
  constructor (props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  render() {
    return (
      <ul>
        {this.renderItems()}
      </ul>
    );
  }

  renderItems () {
    let favourites = this.props.movies.filter( function(item) {
      return item.favourite
    })
    console.log(favourites);
    return favourites.map(this.renderItem);
  }

  renderItem (item, index) {
    return (
      <li key={index}>
        {`Title: ${item.title} Year: ${item.year} Duration: ${item.duration}`}
      </li>
    );
  }
};

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

export default MovieList;
