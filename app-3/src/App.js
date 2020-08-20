import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
      this.state = {
        filterS: '',
        list: ['cat','dog','frog','fish','bird']
      }
    
  }

    handleChange = (filter) => {
      this.setState({ filterS: filter})
      
    }

  render(){
    // let items = this.state.list.map((e) => {  
    //   return <p> {e} </p>
    // })

    let listDisplay = this.state.list
    .filter((element, index) => {
      return element.includes(this.state.filterS)
    })
    .map((element, index) => {
      return <p key={index}>{element}</p>
    })

    return(
      <div>
        <input type="text" onChange={e => this.handleChange(e.target.value)}></input>
        {listDisplay}
      </div>
    )
  }
}

export default App;
