import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
const url = process.env.NODE_ENV === 'production' ? 'https://radiant-retreat-79368.herokuapp.com' : 'http://localhost:3000'



const Trip = props => {

  return (
    <Card>
      <Card.Img variant="top" src={`${url}/${props.trip.image_urls[0]}`} />
      <Card.Body>
        <Card.Title>{props.trip.country}</Card.Title>
        <Card.Text>
          {props.trip.text}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
  )
}
export default Trip
