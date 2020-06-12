import React from 'react'
import styled from 'styled-components'

const CharacterDetails = (props) => {

  return (
    <div>
      <div>
        <img src={props.image} />
      </div>
      <div>
        <p>Species: {props.species}</p>
        <p>Type: {props.type}</p>
        <p>Origin: {props.origin}</p>
        <p>Location: {props.location}</p>
      </div>
    </div>
  )
}

export default CharacterDetails;