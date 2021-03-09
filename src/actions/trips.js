import { DirectUpload } from 'activestorage'
const url = process.env.NODE_ENV === 'production' ? 'https://radiant-retreat-79368.herokuapp.com' : 'http://localhost:3000'
export const tripAction = trip => {
  return {
    type: 'TRIPS',
    trip
  }
}

export const trip = trip => {
  return {
    type: 'TRIP',
    trip
  }
}



export const fetchTrips = data => {
  if (!data.props.currentUser) {
    return
  }
  return (
    
    fetch(`${url}/users/${data.props.currentUser.id}/trips`)
    .then(resp => resp.json())
    .then(resp => data.props.tripAction(resp))
  )
}

export function uploadFile (file,user,last) {
  return dispatch => {
    dispatch({type: 'FETCHING_TRIPS'})
    const upload = new DirectUpload(file, `http://localhost:3000/rails/active_storage/direct_uploads`)
    upload.create((error, blob) => {
      console.log('STARTING',blob)
      if (error) {
        console.log(error,'error')
      } else {
        console.log('no error', blob)
        fetch(`${url}/trips/${user.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({images: blob.signed_id})
        })
        .then(resp => resp.json())
        .then(data => {
          console.log("DATA", data)
          dispatch({type: 'TRIP', payload: data})
          // last ? dispatch({type: 'TRIP', payload: data}) : console.log('false', data)
        })
      }
    })
  }
}