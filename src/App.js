import React, { Component } from 'react';
import './App.css';

class App extends Component {
  day = ['월', '화', '수', '목', '금', '토', '일'];
  table = [1, 2, 3, 4, 5, 6];
  style = {
    table: {
      display: 'flex',
      flexDirection: 'row',
      margin: '10px'
    },
    el: {}
  };

  render() {
    return (
      <div className="App">
        {this.day.map(el => (
          <div>
            <div className="Table day" children={el} key={el} />
            {this.table.map(el => (
              <div className="Table" children={el} key={el} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
