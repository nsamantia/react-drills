import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './NewTask'
import List from './List'

class App extends Component {
  constructor(){
    super()
  
  this.state = {
    list: []
  }
  this.handleAddTask = this.handleAddTask.bind(this)
  }
  handleAdd(task) {
    this.setState({ this: [...this.state.list, task]})
  }
}

  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    });

    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input
            value={this.state.input}
            placeholder="Enter new task"
            onChange={e => this.handleInputChange(e.target.value)}
          />

          <button onClick={this.handleAddTask}>Add</button>
        </div>

        <br />

        {list}
      </div>
    );
  }
  


export default App;
