import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {feedback: true}

  onbutton = () => {
    this.setState({feedback: false})
  }

  onEmoji = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="bg-whiteColor">
        <h1 className="heading">
          How Satisfied are you with our
          <br /> customer support performance ?
        </h1>
        <ul>
          {emojis.map(each => (
            <li key={each.id}>
              <button type="button" onClick={this.onbutton}>
                <img src={each.imageUrl} alt={each.name} />
                <br />
                <p>{each.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  onEmojiFeedback = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="bg-whiteColor">
        <img src={loveEmojiUrl} alt="love emoji" />
        <h1>Thank You</h1>
        <p>
          we will use your feedback to improve our customer support <br />{' '}
          performance
        </p>
      </div>
    )
  }

  render() {
    const {feedback} = this.state
    return (
      <div className="bg-color">
        <div>{feedback ? this.onEmoji() : this.onEmojiFeedback()}</div>
      </div>
    )
  }
}

export default Feedback
