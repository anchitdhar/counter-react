import React from 'react';

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      count:0
    }
    this.doubleIncrease= this.doubleIncrease.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.reduceCount= this.reduceCount.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        count:prevState.count + 1
      }
    })
  }

  doubleIncrease() {
    this.setState(prevState => {
      return {
        count:prevState.count + 2
      }
    })
  }

  reduceCount() {
    this.setState(prevState => {
      return {
        count:prevState.count - 1
      }
    })
  }

  render() {
    return (
      <div style={{textAlign:"center"}}>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
        <button onClick={this.doubleIncrease}>DoubleIncrease</button>
        <button onClick={this.reduceCount}>reduceCount</button>
      </div>
    )
  }
}
export default App;
