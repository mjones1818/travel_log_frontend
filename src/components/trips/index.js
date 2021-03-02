import React from 'react'
import {Link} from 'react-router-dom'
const url = process.env.NODE_ENV === 'production' ? 'https://radiant-retreat-79368.herokuapp.com' : 'http://localhost:3000'
const Trip = props => {
  return (
    <div className='trip' onClick={props.handleClick}>
      <Link to={`/trips/${props.trip.id}`}>
        <h3>{props.trip.country}</h3>
        <img src={`${url}/${props.trip.image_urls[0]}`}></img>
      </Link>

    </div>
  )
}
export default Trip