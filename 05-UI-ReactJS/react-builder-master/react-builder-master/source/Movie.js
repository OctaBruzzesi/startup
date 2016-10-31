import React from 'react';
import ReactDOM from 'react-dom';
import MovieInput from './MovieInput';
import MovieList from './MovieList';
import MovieEdit from './MovieEdit';

class Movie extends React.Component{
  render () {
    return (
        <div className="movie">
            <MovieInput onSubmit={this.handleMovieInputSubmit} movie={this.handleMovieUpdate}/> <br />
            <MovieList movies={this.getMovies()} />
            <h3 id="favouriteListTitle" />
            <ul id="list" />
            <MovieEdit movies={this.getMovies()} onSubmit={this.handleMovieUpdate} />
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

  handleMovieInputSubmit (event) {
    let movies = JSON.parse(localStorage.getItem("movieStorage")) || [];
    movies.push(event);
    localStorage.setItem("movieStorage", JSON.stringify(movies));
  }

  handleMovieUpdate (index) {
    let movies = JSON.parse(localStorage.getItem("movieStorage"));
    console.log(movies[index])
    return(movies[index])
  }
};

export default Movie;
