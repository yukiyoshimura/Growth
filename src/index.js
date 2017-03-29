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
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TextField from 'material-ui/TextField';

import FontIcon from 'material-ui/FontIcon';
import {grey300, yellow500, blue500} from 'material-ui/styles/colors';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// For Button
const style = {
  margin: 12,
};

const iconStyles = {
  marginTop: 4,
};

const TitleStyle = {
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'white',
    fontSize: 30,
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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Login"
          onTouchTap={this.handleToggle}
        />
        <Drawer width={200} openSecondary={true} open={this.state.open} >
          <AppBar title="Login"
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            onLeftIconButtonTouchTap={this.handleToggle}
          />
          <TextField
            hintText="UserAccount"
            floatingLabelText="UserAccount"
          />
          <TextField
            hintText="Password"
            floatingLabelText="Password"
          />
          <RaisedButton
            label="GO"
            secondary={true}
            style={style}
            containerElement={<Link to="/userSample" />}
            onTouchTap={this.handleToggle}
          />
        </Drawer>
      </div>
    );
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
          title={<Link to="/" style={TitleStyle}>Growth</Link>}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementRight={<Login />}
      />
      <TextField
        hintText="検索キーワード"
        floatingLabelText=""
        />
      <FontIcon className="material-icons" style={iconStyles} color={grey300}>search</FontIcon>
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
     <hr/>

     <Route exact path="/" component={Home}/>
     <Route path="/regist" component={RegistHome}/>
     <Route path="/userSample" component={UserInfo}/>
     <Route path="/userDetail" component={UserInfo}/>
   </div>
 </Router>,
  document.getElementById('root')
);
