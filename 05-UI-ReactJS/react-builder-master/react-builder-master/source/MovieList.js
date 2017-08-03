import React from 'react';
import Movie from './Movie';
import {removeMovie} from './Redux/actions';
import { connect } from 'react-redux';
import { handleMovies } from './Redux/reducers';
import { Link } from 'react-router';

class MovieList extends React.Component {
  constructor (props) {
    super(props);
    this.renderItem = this.renderItem.bind(this)
  }

  render () {
    return (
      <ul>
        {this.renderItems()}
      </ul>
    );
  }

  removeMovie (index) {
    this.props.onDelete(index)
  }

  renderItems () {
    return this.props.movies.map(this.renderItem);
  }

  renderItem (item, index) {
    let fav;
    if(item.favourite) {
      fav = 'Favourite'
    } else {
      fav = ''
    }
    return (
      <li key={index}>
        {`Title: ${item.title} Year: ${item.year} Duration: ${item.duration} ${fav}`}
        <Link to={`MovieInput/${JSON.stringify(item, item.new=false, item.id=index)}`}><button className="buttonSelect">Edit</button></Link>
        <button className="buttonSelect" onClick={this.removeMovie.bind(this, index)}>Remove</button>
      </li>
    );
  }
};

MovieList.defaultProps = {
  movies: []
}

export default MovieList;
