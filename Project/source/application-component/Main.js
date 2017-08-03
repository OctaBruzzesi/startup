import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import Header from './Header';

class Main extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
        <MuiThemeProvider>
          <div>
            <Header />
          </div>
        </MuiThemeProvider>
    )
  }
}

export default Main;
