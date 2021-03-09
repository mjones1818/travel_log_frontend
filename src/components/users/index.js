import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'
const url = process.env.NODE_ENV === 'production' ? 'https://radiant-retreat-79368.herokuapp.com' : 'http://localhost:3000'

const User = props => {
  return (
    <Card className= 'card'>
      <Card.Img variant="top" src={`${url}/${props.user.profile_url}`} />
      <Card.Body>
        <Card.Title>{props.user.name}</Card.Title>
        <Card.Text>
          {/* {props.trip.text} */}
        </Card.Text>
        <Link to={`users/${props.user.id}`}><Button variant="primary">View User</Button></Link>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
  )
}

export default User