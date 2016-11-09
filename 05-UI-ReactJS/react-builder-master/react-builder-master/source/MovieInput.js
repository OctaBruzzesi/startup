import React from 'react';
import Movie from './Movie';
import {addMovie, editMovie, initializeState} from './Redux/actions';
import { connect } from 'react-redux';
import { handleMovies } from './Redux/reducers';
import { Link } from 'react-router';

class MovieInput extends React.Component {
  constructor(props) {
    super(props);

    let movies = JSON.parse(this.props.params.movieID)

    this.state = {
      title: movies.title,
      year: movies.year,
      duration: movies.duration,
      favourite: movies.favourite,
      id: movies.id
      }

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeDuration = this.handleChangeDuration.bind(this);
    this.handleFavourite = this.handleFavourite.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle (event) {
    this.setState({title: event.target.value});
  }

  handleChangeYear (event) {
    this.setState({year: event.target.value});
  }

  handleChangeDuration (event) {
    this.setState({duration: event.target.value});
  }

  handleFavourite (event) {
    this.setState({favourite: event.target.checked})
  }

  handleSubmit (event) {
    if (this.props.params.movieID==='0'){
      store.dispatch(addMovie(this.state))
    } else {
      store.dispatch(editMovie(this.state, this.props.params.movieID));
    }
    this.setState({title: '', year: '', duration: '', favourite: ''})
  }

  render () {
    return (
      <div>
        <Movie /><h3>Movie</h3><br/>
        <div>
          <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChangeTitle} /><br /><br />
          <input type="text" placeholder="Year" name="year" value={this.state.year} onChange={this.handleChangeYear} /><br /><br />
          <input type="text" placeholder="Duration" name="duration" value={this.state.duration} onChange={this.handleChangeDuration}/><br /><br />
          <label />Mark as favourite <input type="checkbox" checked={this.state.favourite} onChange={this.handleFavourite} /> <br /> <br />
          <Link to={`MovieInput/0`}><button onClick={this.handleSubmit.bind(this)}>Submit</button></Link>
        </div>
      </div>
    );
  }
};

function mapStateToProps (state) {
  return {
    movies: state
  };
}

export default connect(mapStateToProps)(MovieInput);
