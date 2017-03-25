import React from 'react';
import ReactDOM from 'react-dom';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class GoalListTbl extends React.Component {
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
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>#</TableHeaderColumn>
            <TableHeaderColumn>達成したいこと</TableHeaderColumn>
            <TableHeaderColumn>ステータス</TableHeaderColumn>
          </TableRow>
      </TableHeader>
      <TableBody stripedRows={true}>
        <TableRow selected={true}>
          <TableRowColumn>1</TableRowColumn>
          <TableRowColumn>高尾山登頂！</TableRowColumn>
          <TableRowColumn>達成！！</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>2</TableRowColumn>
          <TableRowColumn>"Excelの資格とるお( ´ ▽ ` )ﾉ"</TableRowColumn>
          <TableRowColumn>実行中</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>3</TableRowColumn>
          <TableRowColumn>"腹筋毎日20回(⌒-⌒; )"</TableRowColumn>
          <TableRowColumn>実行中</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>4</TableRowColumn>
          <TableRowColumn>腕立て伏せ毎日20回</TableRowColumn>
          <TableRowColumn>2017/04/01〜</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>5</TableRowColumn>
          <TableRowColumn>サブマネになるる</TableRowColumn>
          <TableRowColumn>実行中</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
    );
  }
}

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div>
　　　　　<p>
          <img src="images/example.jpg" width="20%" height="10%" alt="Sample"></img>
          <br />
        UserName:ぽよ
        <br />
        </p>
        <GoalListTbl/>

      </div>
    );
  }
}

export default UserInfo;
