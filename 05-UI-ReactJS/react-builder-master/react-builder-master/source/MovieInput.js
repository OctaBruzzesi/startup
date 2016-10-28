import React from 'react';

class MovieInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "",year: "",duration: "", favourite: false};
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeDuration = this.handleChangeDuration.bind(this);
    this.handleFavourite = this.handleFavourite.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
    alert(this.state.title);
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
    console.log('guardo', this.props)
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }
  }

  render() {
    return (
      <div>Movie<br/>
            <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChangeTitle} /><br /><br />
            <input type="text" placeholder="Year" name="year" value={this.state.year} onChange={this.handleChangeYear} /><br /><br />
            <input type="text" placeholder="Duration" name="duration" value={this.state.duration} onChange={this.handleChangeDuration}/><br /><br />
            <label />Mark as favourite <input type="checkbox" value={this.state.favourite} onChange={this.handleFavourite} /> <br /> <br />
            <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
};

export default MovieInput;
