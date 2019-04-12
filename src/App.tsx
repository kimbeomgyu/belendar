import * as React from 'react';
import { Component } from 'react';
import './App.css';
import Calendar from './Calendar';
import Todo from './Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar />
        <Todo />
      </div>
    );
  }
}

export default App;
