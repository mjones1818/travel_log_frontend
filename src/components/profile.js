import {Component} from 'react'

class Profile extends Component {
  
  render() {
    console.log(this.props)
    return(
      <div>
        <h1>Profile: {this.props.currentUser.name}</h1>
        <img src={`http://localhost:3000/${this.props.currentProfile}`}/>
      </div>
    )
  }
}

export default Profile