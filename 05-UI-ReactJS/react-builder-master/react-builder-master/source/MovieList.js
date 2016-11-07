import React from 'react';
import Movie from './Movie';
import {listMovie} from './Redux/actions';
import store from './store';
import { connect } from 'react-redux';
import { handleMovies } from './Redux/reducers';
import { Link } from 'react-router';

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
    let movies;
    movies = store.getState();
    console.log(movies)
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
        <Link to={`MovieInput/${JSON.stringify(item, item.new=false)}`}><button className="buttonSelect">Edit</button></Link>
      </li>
    );
  }
};

export default MovieList;
