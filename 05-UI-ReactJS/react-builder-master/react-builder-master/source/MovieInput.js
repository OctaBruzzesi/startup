import React from 'react';
import Movie from './Movie';
import {addMovie, editMovie, initializeState} from './Redux/actions';
import store from './store';
import { connect } from 'react-redux';
import { handleMovies } from './Redux/reducers';

class MovieInput extends React.Component {
  constructor(props) {
    super(props);

    // console.log(this.props.params.movieID)
    let movies = JSON.parse(this.props.params.movieID)

    this.state = {
      title: movies.title,
      year: movies.year,
      duration: movies.duration,
      favourite: movies.favourite,
      new: movies.new
      // title: movies[this.props.params.movieID].title || '',
      // year: movies[this.props.params.movieID].year || '',
      // duration: movies[this.props.params.movieID].duration || '',
      // favourite: movies[this.props.params.movieID].favourite || false
      }
      //

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeDuration = this.handleChangeDuration.bind(this);
    this.handleFavourite = this.handleFavourite.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  component(props){
    // console.log(this.props)
    // let a = store.dispatch(getMaxId());
    // console.log(a);
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  handleChangeYear(event) {
    this.setState({year: event.target.value});
  }

  handleChangeDuration(event) {
    this.setState({duration: event.target.value});
  }

  handleFavourite (event) {
    this.setState({favourite: event.target.checked})
  }

  handleSubmit(event) {
    console.log(this.state)
    // if (this.state.new){
    // store.dispatch(addMovie(this.state))
    // } else {
    //   console.log(this.state)
    //   store.dispatch(editMovie(this.state, this.props.params.movieID));
    // }
  }

  render() {
    let movies = store.getState();
    // console.log(this.props.params.movieID)
    // if (this.props.params.movieID < movies.length){
    //     this.setState({title: movies[this.props.params.movieID].title})
      // this.initializeState(movies[this.props.params.movieID].title, movies[this.props.params.movieID].year, movies[this.props.params.movieID].duration, movies[this.props.params.movieID].favourite);
    // }
    return (
      <div>
        <Movie /><h3>Movie</h3><br/>
        <div>
          <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChangeTitle} /><br /><br />
          <input type="text" placeholder="Year" name="year" value={this.state.year} onChange={this.handleChangeYear} /><br /><br />
          <input type="text" placeholder="Duration" name="duration" value={this.state.duration} onChange={this.handleChangeDuration}/><br /><br />
          <label />Mark as favourite <input type="checkbox" checked={this.state.favourite} onChange={this.handleFavourite} /> <br /> <br />
          <button onClick={this.handleSubmit.bind(this)}>Submit</button>
          <button onClick={this.component.bind(this)}>Try</button>
        </div>
      </div>
    );
  }

  initializeState (title, year, duration, favourite) {
      this.setState({title: title})
      this.setState({year: year})
      this.setState({duration: duration})
      this.setState({favourite: favourite})
    }

  // renderInput () {
  //   return (
  //
  // )
  // }
};

export default MovieInput;
