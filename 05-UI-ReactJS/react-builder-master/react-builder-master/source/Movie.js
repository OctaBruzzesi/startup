import React from 'react';
import ReactDOM from 'react-dom';
import MovieInput from './MovieInput';
import MovieList from './MovieList';
import MovieEdit from './MovieEdit';
import { Link } from 'react-router';

class Movie extends React.Component{
  constructor () {
    super();
    this.state = {movieToUpdate: {}}
  }

  render () {
    return (
        <div className="movie">
          <Link to="/MovieInput"><button className="buttonSelect">Movie Input</button></Link>
          <Link to="/MovieList"><button className="buttonSelect">Movie List</button></Link>
          <h3 id="favouriteListTitle" />
          <ul id="list" />
        </div>
    );
  }

  //
  // <MovieEdit movies={this.getMovies()} onSubmit={this.handleMovieUpdate.bind(this)} />

  getMovies () {
    let movies = localStorage.getItem("movieStorage") || [];
    if(movies != ''){
      return JSON.parse(movies)
    }
    else {
      return JSON.parse('null')
    }
  }

  handleMovieInputSubmit (event) {
    let movies = JSON.parse(localStorage.getItem("movieStorage")) || [];
    movies.push(event);
    localStorage.setItem("movieStorage", JSON.stringify(movies));
  }

  handleMovieUpdate (index) {
    if(index!==null){
      let movies = JSON.parse(localStorage.getItem("movieStorage"));
      console.log(movies[index])
      this.setState({movieToUpdate: movies[index]});
    }
  }
};

export default Movie;
