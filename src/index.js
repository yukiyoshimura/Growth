import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Grid from './Grid';
import './index.css';
//import injectTapEventPlugin from "react-tap-event-plugin";
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const style = {
  margin: 12,
};


class InputGoal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
      <RaisedButton label="START!!" secondary={true} style={style} href="goal_input.html" />
      </div>
    )
  }

}


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
      return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    return(
      <div>
      <AppBar
          title="Growth"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementRight={<FlatButton label="LogIn" />}
      />
      <InputGoal />
      <Grid />
      </div>

    );
  }
}

Header.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

ReactDOM.render(
    <Header />,
  // --  <Grid />, -->
  //  <App />,
  document.getElementById('root')
);

//setInterval(tick, 1000);
