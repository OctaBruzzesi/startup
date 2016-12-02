import React from 'react';
import { Link } from 'react-router';

class Movie extends React.Component{
  constructor () {
    super();
    this.state = {title:'',
    year:'',
    duration:'',
    favourite: false,
    }
  }

  render () {
    return (
      <div className="movie">
        <Link to={`MovieInput/0`} className='link'>Movie Input</Link>
        <Link to="/MoviesHandler" className='link'>Movie List</Link>
        <h3 className="favouriteListTitle" />
        <ul className="list" />
      </div>
    )
  }
};

export default Movie;
