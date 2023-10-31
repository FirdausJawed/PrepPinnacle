import React, { Component } from 'react';
// import logo from './logo.svg';
import './App1.css';
import TodoList from './TodoList.js';
import TodoItems from './TodoItems.js';


class App1 extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <TodoItems />
          <TodoList/>
        </div>
        
      </div>
    );
  }
}

export default App1;
