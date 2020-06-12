import React from 'react'
import styled from 'styled-components'

const ExpandedDetailsContainer = styled.div`
  padding: 1%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ImageContainer = styled.img`
  border-radius: 20px;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

const CharacterDetails = (props) => {

  return (
    <ExpandedDetailsContainer>
      <ImageContainer src={props.image} />
      <TextContainer>
        <p>Species: {props.species}</p>
        <p>Origin: {props.origin}</p>
        <p>Location: {props.location}</p>
      </TextContainer>
    </ExpandedDetailsContainer>
  )
}

export default CharacterDetails;