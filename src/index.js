import React from 'react';
import ReactDOM from 'react-dom';
// Import routing components
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from './App';
import Grid from './Grid';
import InputForm from './inputForm';
import UserInfo from './viewUser';

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

// For Button
const style = {
  margin: 12,
};


class InputGoal extends React.Component {
  constructor(props) {
    super(props);
  }

  static childContextTypes =
  {
      muiTheme: React.PropTypes.object
  }

  getChildContext()
  {
      return {
          muiTheme: getMuiTheme()
      }
  }

  render() {
    return(
      <div>
      <RaisedButton label="START!!" secondary={true} style={style} containerElement={<Link to="/regist" />} />
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
      </div>
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <InputGoal />
        <Grid />
      </div>
    );
  }
}

Header.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};


class RegistHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
      <InputForm />
      </div>
    )
  }
}



const Logout = React.createClass({
  render() {
    return <p>You are now logged out</p>
  }
})

ReactDOM.render(
<Router>
   <div>
   <Header/>
     <ul>
       <li><Link to="/">Home</Link></li>
     </ul>
     <hr/>

     <Route exact path="/" component={Home}/>
     <Route path="/regist" component={RegistHome}/>
     <Route path="/userSample" component={UserInfo}/>
   </div>
 </Router>,
  document.getElementById('root')
);
