import React from 'react';
import ReactDOM from 'react-dom';
import MovieInput from './MovieInput';
import MoviesHandler from './MovieList';
import MovieEdit from './MovieEdit';
import { Link } from 'react-router';
import { getMaxId } from './Redux/actions';
// import store from './store';
import { handleMovies } from './Redux/reducers';

class Movie extends React.Component{
  constructor () {
    super();
    this.state = {title:'',
    year:'',
    duration:'',
    favourite: false,
    }
  }

  component () {
    console.log(this.props.store.getState())
  }

  getMaxId () {
    let movie = {
      title:'',
      year:'',
      duration:'',
      favourite:''
    }
    // console.log(movie)
    return(movie)
  }
  render () {
    let item = {title: '', year: '', duration: '', favourite: false};
    let movies = localStorage.getItem("movieStorage") || [];
    // console.log("item", JSON.stringify(item))
    return (
        <div className="movie">
          <Link to={`MovieInput/0`}><button className="buttonSelect">Movie Input</button></Link>
          <Link to="/MoviesHandler"><button className="buttonSelect">Movie List</button></Link>
          <button onClick={this.component.bind(this)}>Select</button>
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
