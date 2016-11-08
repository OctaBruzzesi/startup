import React from 'react';
import Movie from './Movie';
import {removeMovie} from './Redux/actions';
import store from './store';
import { connect } from 'react-redux';
import { handleMovies } from './Redux/reducers';
import { Link } from 'react-router';

class MovieList extends React.Component {
  constructor (props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  component(props){
    console.log(this.props)
    // let a = store.dispatch(getMaxId());
    // console.log(a);
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

  removeMovie(index) {

  }

  renderItems () {
    if(this.props.movies !== undefined){
      return this.props.movies.map(this.renderItem);
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
        <Link to={`MovieInput/${JSON.stringify(item, item.new=false, item.id=index)}`}><button className="buttonSelect">Edit</button></Link>
        <button className="buttonSelect" onClick={this.removeMovie.bind(this, index)}>Remove</button>
        <button onClick={this.component.bind(this)}>Try</button>
      </li>
    );
  }
};

export default MovieList;
