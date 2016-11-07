import React from 'react';
import Movie from './Movie';
import {addMovie, initializeState} from './Redux/actions';
import store from './store';
import { connect } from 'react-redux';
import { handleMovies } from './Redux/reducers';

class MovieInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "",year: "",duration: "", favourite: true};
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeDuration = this.handleChangeDuration.bind(this);
    this.handleFavourite = this.handleFavourite.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  component(props){
    console.log(this.props)
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
    store.dispatch(addMovie(this.state))
  }

  render() {
    return (
      <div>
      <Movie /><h3>Movie</h3><br/>
            <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChangeTitle} /><br /><br />
            <input type="text" placeholder="Year" name="year" value={this.state.year} onChange={this.handleChangeYear} /><br /><br />
            <input type="text" placeholder="Duration" name="duration" value={this.state.duration} onChange={this.handleChangeDuration}/><br /><br />
            <label />Mark as favourite <input type="checkbox" checked={this.state.favourite} onChange={this.handleFavourite} /> <br /> <br />
            <button onClick={this.handleSubmit.bind(this)}>Submit</button>
            <button onClick={this.component.bind(this)}>Try</button>
      </div>
    );
  }
};

export default MovieInput;
