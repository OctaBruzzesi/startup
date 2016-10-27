import React from 'react';
import ReactDOM from 'react-dom';
import MovieInput from './MovieInput';
import MovieList from './MovieList';

class Movie extends React.Component{
  render () {
    return (
        <div className="movie">
            <MovieInput onSubmit={this.handleMovieInputSubmit} /> <br />
            <MovieList movies={this.getMovies()} />
            <h3 id="favouriteListTitle" />
            <ul id="list" />
        </div>
    );
  }

  getMovies () {
    let movies = localStorage.getItem("movieStorage") || [];

    return JSON.parse(movies);
  }

  handleMovieInputSubmit (event) {
    let movies = JSON.parse(localStorage.getItem("movieStorage")) || [];
    movies.push(event);
    localStorage.setItem("movieStorage", JSON.stringify(movies));
  }
};

export default Movie;
