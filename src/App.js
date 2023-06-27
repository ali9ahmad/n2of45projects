import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  
  reset = () => {
    this.setState({
      count: 0
    })
  }
  
  
  render () {
    return (
      <div className='App'>
      <button onClick={this.increment} className='counter'>+</button>
      <button onClick={this.reset} className='counter extra'>RESET</button>
      <button onClick={this.decrement} className='counter'>-</button>
      <h2 className='result'>{this.state.count}</h2>
      </div>
      );
    }
  }
  export default App;
  