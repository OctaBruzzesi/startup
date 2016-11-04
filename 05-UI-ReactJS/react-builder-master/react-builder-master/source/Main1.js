import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'


class Main extends React.Component {
  render() {
     return (
       <div>
         <h1>App</h1>
         <ul>
           <li>About</li>
         </ul>
       </div>
     )
   }
}

export default Main;
