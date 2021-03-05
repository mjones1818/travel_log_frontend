import React from 'react'
import {Carousel} from 'react-bootstrap'

const TripShow = props => {
  return (
    <div>
      <h1>test</h1>
      <h2>{props.trip.country}</h2>
      <div className='carousel'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`http://localhost:3000/${props.trip.image_urls[0]}`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`http://localhost:3000/${props.trip.image_urls[0]}`}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`http://localhost:3000/${props.trip.image_urls[0]}`}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <p>{props.trip.text}</p>
    </div>
  )

}

export default TripShow