import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const WIDTH = 32;
const HEIGHT = 32;

class Pixel extends React.Component {
  render(){
    return(
      <div className='pixel' style={{backgroundColor: this.props.backgroundColor}}>

      </div>
    );
  }
}

class Board extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pixels: Array(WIDTH).fill(Array(HEIGHT).fill('#000000'))
    };
  }

  fetchData(){
    fetch('http://vino0244.xyz/place/data')
    .then(res => res.json())
    .then(json => this.syncPixels(json, this));
  
    setTimeout(this.fetchData.bind(this), 3000);
  }

  syncPixels(data){
    //console.log('syncing');
    this.setState({pixels: data.matrix});
  }

  renderPixel(x, y){
    return <Pixel key={x.toString() + y.toString()} backgroundColor={this.state.pixels[x][y]}/>
  }

  renderRow(x){
    let pixel_array = [];
    for (let i=0; i<WIDTH; i++){
      pixel_array.push(this.renderPixel(x, i));
    }

    return <div className="row" key={x}>{pixel_array}</div>;
  }

  renderBoard(){
    let pixel_matrix = [];
    for (let i=0; i<HEIGHT; i++){
      pixel_matrix.push(this.renderRow(i));
    }

    return pixel_matrix;
  }

  componentDidMount(){
    this.fetchData();
  }

  render(){
    return (
      <div className="board-container">
        <div className="theboard">
          {this.renderBoard()}
        </div>
      </div>
    );
  }

}


class Page extends React.Component{
  render(){
    return(
      <div>
        <div className="title-txt">Visit&nbsp;<a href="https://twitch.tv/vino0244/">https://twitch.tv/vino0244/</a>&nbsp;to participate!</div>
        <Board />
      </div>
    );
  }
}

ReactDom.render(
  <Page />,
  document.getElementById('root')
);