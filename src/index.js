import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
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


// export default AppBarExampleIcon;

/*
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div>
        <h1>Hello, world</h1>
        <MuiThemeProvider>
          <RaisedButton label="Secondary" />
        </MuiThemeProvider>
      </div>

      /*
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />

    );

  }

};
*/

/*
<MuiThemeProvider>
  <RaisedButton label="Secondary" secondary={true} />
</MuiThemeProvider>

*/
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
          iconElementRight={<FlatButton label="Save" />}
      />
      </div>
    );
  }
}

Header.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

ReactDOM.render(
    <Header />,
  document.getElementById('root')
);

//setInterval(tick, 1000);
