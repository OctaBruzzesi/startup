import React from 'react';
import Movie from './Movie';
import { removeMovie } from './Redux/actions';
import { connect } from 'react-redux';
import { handleMovies } from './Redux/reducers';
import store from './store';
import MovieList from './MovieList';

class MoviesHandler extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Movie />
        <MovieList movies={this.props.movies} onDelete={this.removeMovie}/>
      </div>
    );
  }

  removeMovie (index) {
    store.dispatch(removeMovie(index))
  }
};

function mapStateToProps (state) {
  return {
    movies: state
  };
}

export default connect(mapStateToProps)(MoviesHandler);
