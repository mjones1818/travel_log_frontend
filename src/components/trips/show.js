import React from 'react'
import {Carousel} from 'react-bootstrap'

const makeCarouselItems = props => {
  return (
    props.trip.image_urls.map(image => {
      return (
        <Carousel.Item>
          <img
            key={image}
            className="d-block w-100"
            src={`http://localhost:3000/${image}`}
            alt="A picture slide"
          />
        </Carousel.Item>
      )
    })
    )
}

const TripShow = props => {
  return (
    <div>
      <h2>{props.trip.country}</h2>
      <div className='carousel'>
        <Carousel>
          {makeCarouselItems(props)}
        </Carousel>
      </div>
      <h4>Description: </h4>
      <p>{props.trip.text}</p>
    </div>
  )

}

export default TripShow