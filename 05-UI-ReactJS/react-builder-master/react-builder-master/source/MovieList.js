import React from 'react';
import Movie from './Movie';

class MovieList extends React.Component {
  constructor () {
    super();

    this.renderItem = this.renderItem.bind(this);
  }

  render() {
    return (
      <div>
        <Movie />
        <ul>
          {this.renderItems()}
        </ul>
      </div>

    );
  }

  getMovies () {
    let movies = localStorage.getItem("movieStorage") || [];
    if(movies != ''){
      return JSON.parse(movies)
    }
    else {
      return JSON.parse('null')
    }
  }

  renderItems () {
    let favourites;
    let movies = this.getMovies();
    if(movies !== null){
      return movies.map(this.renderItem);
    }
    return (
      <li />
    )
  }

  renderItem (item, index) {
    let boundItemClick = this.initializeState;
    return (
      <li key={index}>
        {`Title: ${item.title} Year: ${item.year} Duration: ${item.duration}`}
        <button onClick={boundItemClick}>Edit</button>
      </li>
    );
  }
};

export default MovieList;
