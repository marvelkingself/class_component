import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(){
    super()
    this.state={
      count: 0
    }
    this.increase = this.increase.bind(this);
  }
  increase() { 
    this.setState({ count: this.state.count + 1 }); 
} 
  render() {
    return (
      <div style={{ margin: '50px' }}> 
      <h1 className="text-3xl font-bold underline" >Welcome to HP  </h1> 
      <h3>Counter App using Class Component : </h3> 
      <h2> {this.state.count}</h2> 
      <button onClick={this.increase}> Add</button> 

  </div> 
    )
  }
}
