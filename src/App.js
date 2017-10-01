import React, { Component } from 'react'
import './App.css'
import Time from './Time'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      targetDate: 'January 1, 2018',
      newTargetDate: ''
    }
  }

  changeTargetDate () {
    this.setState({
      targetDate: this.state.newTargetDate
    })
  }

  render () {
    return (
      <div className="App">
        <div className='date'>
          Time until {this.state.targetDate}
        </div>
        <div className='timeLeft'>
          <Time
            targetDate={this.state.targetDate}/>
        </div>
        <div className='inputForm'>
          <input
            placeholder='Enter new date...'
            onChange={e => this.setState({newTargetDate: e.target.value})}/>
          <button
            onClick={() => this.changeTargetDate()}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default App
