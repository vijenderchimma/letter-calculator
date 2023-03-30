// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {text: ''}

  onChangeOfInput = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {text} = this.state
    const count = text.length
    return (
      <div className="app-container">
        <div className="content-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
          <div className="content-container">
            <h1 className="main-heading">Calculate The letters you enter</h1>
            <div>
              <label htmlFor="inputId" className="phrase-heading">
                Enter the phrase
              </label>
              <br />
              <input
                type="text"
                className="text-input"
                onChange={this.onChangeOfInput}
                id="inputId"
              />
            </div>
            <div className="counting-text-container">
              <p className="output-number">No.of letters: {count}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
