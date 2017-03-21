import React from 'react';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DatePicker from 'material-ui/DatePicker';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

// Import routing components
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// For Button
const style = {
  margin: 12,
};

class InputForm extends React.Component {
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

  render () {
    return(
      <div>
        <TextField
          hintText="達成したいこと"
          floatingLabelText="達成したいこと"
          />
        <br />
        <DatePicker hintText="いつまでに" floatingLabelText="いつまでに"　mode="landscape" />
        <br />
        <TextField
          hintText="達成するとどうなる"
          floatingLabelText="達成するとどうなる"
          />
      　<br />
      <ConfirmDialog />
      </div>
    );
  }
}

class ConfirmDialog extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleClose}
       />,
       <FlatButton
         label="OK"
         primary={true}
         keyboardFocused={true}
         onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Regist"  secondary={true} style={style} onTouchTap={this.handleOpen} />
        <Dialog
          title="この内容で登録します。よろしいですか？"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        </Dialog>
      </div>
    );
  }
}


export default InputForm;
