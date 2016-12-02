import React from 'react';
import Movie from './Movie';
import { addMovie, editMovie } from './Redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import store from './store';

class MovieInput extends React.Component {
  constructor(props) {
    super(props);

    let movies = JSON.parse(this.props.params.movieID)
    console.log(store.getState())
    this.state = {
        title: movies.title,
        year: movies.year,
        duration: movies.duration,
        favourite: true,
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
    console.log("estoy", event.target.checked)
    this.setState({favourite: event.target.checked})
  }

  handleSubmit (event) {
    if (this.props.params.movieID === '0'){
      store.dispatch(addMovie(this.state))
    } else {
      store.dispatch(editMovie(this.state, this.props.params.movieID));
    }


    this.setState({title: '', year: '', duration: '', favourite: false})
  }

  render () {
    return (
      <div>
        <Movie /><h3>Movie</h3>
        <div>
          <input {...this.getInputProps("Title", "title", this.state.title, this.handleChangeTitle)} />
          <input {...this.getInputProps("Year", "year", this.state.year, this.handleChangeYear)} />
          <input {...this.getInputProps("Duration", "duration", this.state.duration, this.handleChangeDuration)} />
          <label />Mark as favourite <input {...this.getCheckboxProps()} />
          <Link to={`MovieInput/0`}><button onClick={this.handleSubmit.bind(this)}>Submit</button></Link>
        </div>
      </div>
    );
  }

  getInputProps (placeholder, name, value, onChange) {
    return {
      type: 'text',
      placeholder: placeholder,
      name: name,
      value: value,
      onChange: onChange,
      className: 'input'
    }
  }

  getCheckboxProps () {
    return {
      type: 'checkbox',
      checked: this.state.favourite,
      onChange: this.handleFavourite,
      className: 'checkbox'
    }
  }
};

function mapStateToProps (state) {
  return {
    movies: state
  };
}

export default connect(mapStateToProps)(MovieInput);
