import React, { Component } from 'react'
import './App.css'

class Time extends Component {
  constructor (props) {
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount () {
    this.getTimeUntil(this.props.targetDate)
  }

  componentDidMount () {
    setInterval(() => this.getTimeUntil(this.props.targetDate), 1000)
  }

  leadingZero (number) {
    return number < 10 ? '0' + number : number
  }

  getTimeUntil (targetDate) {
    const time = Date.parse(targetDate) - Date.parse(new Date())
    const seconds = Math.floor((time / 1000) % 60)
    const minutes = Math.floor((time / 1000 / 60) % 60)
    const hours = Math.floor(time / (1000 * 60 * 60) % 24)
    const days = Math.floor(time / (1000 * 60 * 60 * 24))

    this.setState({days, hours, minutes, seconds})
  }

  render () {
    return (
      <div>
        <div className='days'>{this.leadingZero(this.state.days)} days</div>
        <div className='hours'>{this.leadingZero(this.state.hours)}:</div>
        <div className='minutes'>{this.leadingZero(this.state.minutes)}:</div>
        <div className='seconds'>{this.leadingZero(this.state.seconds)}</div>
      </div>
    )
  }
}

export default Time
