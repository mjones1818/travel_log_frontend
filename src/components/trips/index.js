import React from 'react'
const Trip = props => {
  return (
    <div className='trip'>
      <h3>{props.trip.country}</h3>
      <img src={`http://localhost:3000/${props.trip.image_urls[0]}`}></img>
    </div>
  )
}
export default Trip