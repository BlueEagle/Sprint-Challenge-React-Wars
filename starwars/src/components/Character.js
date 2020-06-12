// Write your Character component here
import React from 'react'


const Character = (props) => {
  const {name, status, species, type, gender, image, episode} = props.character
  let {origin, location} = props
  origin = origin.name
  location = location.name

  return (
    <div>
      <p>Name: {name}</p>
      <p>Status: {status}</p>
    </div>
  )
}

export default Character;