// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {IsLoggedIn: false}

  onClickButton = () => {
    this.setState(prevState => ({IsLoggedIn: !prevState.IsLoggedIn}))
  }

  render() {
    const {IsLoggedIn} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <Message IsLoggedIn={IsLoggedIn} />
          {IsLoggedIn ? (
            <Logout logout={this.onClickButton} />
          ) : (
            <Login login={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
