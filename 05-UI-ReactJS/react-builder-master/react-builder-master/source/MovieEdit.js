import React from 'react';
import MovieInput from './MovieInput';
//
class MovieEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {title: "",year: "",duration: "", favourite: false};
    //this.handleChangeTitle = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.renderMovie = this.renderMovie.bind(this);
  }
//
//   handleClick () {
//
//   }
//
  render() {
    return (
      <div>
        {this.renderMovies()}
      </div>
    );
  }
//
//   // renderScrollable (item, index, isSelected) {
//   //   console.log(this.props.movies)
//   //   let isSelected = this.state.isSelected;
//   //   console.log(isSelected);
//   //   if (isSelected) {
//   //       alert("a")
//   //   }
//     return (
//       <div key={index}>
//         <li onClick={isSelected=true}>{item.title}</li>
//       </div>
//     )
//   }
//
  initializeState (index) {
    console.log(index)
    this.props.onSubmit(index);
    // enableEdit();
  }

  handleUpdateTitle (event) {
    this.setState({title: event.target.value})
    console.log(this.state.title);
  }

  handleUpdateYear(event) {
    this.setState({year: event.target.value});
    console.log(this.state.year);
  }

  updateUpdateDuration(event) {
    this.setState({duration: event.target.value});
    console.log(this.state.duration);
  }

  handleUpdateFavourite (event) {
    this.setState({favourite: event.target.checked})
    console.log(this.state.favourite);
  }

  handleUpdate(index) {
    console.log('guardo', this.state)
    console.log(index);
    this.props.onSubmit(this.state, index);
  }

  renderMovies () {
    let isSelected = false;
    return (
      this.props.movies.map(this.renderMovie)
    )
  }

  renderMovie (item, index) {
    let boundItemClick = this.initializeState.bind(this, index);
    let boundItemUpdate = this.handleUpdate.bind(this, index)
    return (
      <div key={index}>
        <br />
        <il>{item.title}</il>
        <button onClick={boundItemClick}>Edit</button>
      </div>
    )
  }

  // <input type="text" name="year" placeholder={item.year} onChange={this.handleUpdateYear.bind(this)}/>
  // <input type="text" name="duration" placeholder={item.duration} onChange={this.handleUpdateYear.bind(this)}/>
  // <label /> Favourite <input type="checkbox" checked={item.favourite} onChange={this.handleUpdateFavourite.bind(this)}/>

};

function enableEdit () {
  isEnabled = true;
}

export default MovieEdit;
