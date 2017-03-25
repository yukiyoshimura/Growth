import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// for solved error
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Import routing components
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img:  'images/pic1.jpg',
    title:  'ride bicycle',
    author: 'Tomy',
  },
  {
    img:  'images/pic2.jpg',
    title:  'ラインポップで10000点',
    author: '河村',
  },
  {
    img:  'images/pic3.jpg',
    title:  '親友の結婚式でスピーチをする',
    author: 'ATUSHI',
  },
  {
    img:  'images/pic4.jpg',
    title:  '山に登る',
    author: 'ぽよ',
  },
  {
    img:  'images/pic5.jpg',
    title:  'カナダに行く',
    author: 'test',
  },
  {
    img:  'images/pic6.jpg',
    title:  'サグラダファミリアをバックに写真を撮る',
    author: 'YUKI',
  },
];

class Grid extends React.Component {
  constructor(props) {
    super(props);
    console.log(tilesData);
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
      <div style={styles.root}>
        <GridList
          cellHeight={200}
          style={styles.gridList}
        >
          <Subheader>Recently</Subheader>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
              actionIcon={<IconButton containerElement={<Link to="/userSample" />}><StarBorder color="white" /></IconButton>}
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}


export default Grid;
