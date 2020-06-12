// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const CharacterBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid gray;
`
const CharacterText = styled.p`
  margin-left: 3%;
  margin-right: 3%;
`

const Character = (props) => {
  // const {name, status, species, type, gender, image, episode} = props.character
  // let {origin, location} = props
  // origin = origin.name
  // location = location.name

  return (
    <CharacterBox>
      <CharacterText>Name: {props.character.name}</CharacterText>
      <CharacterText>Status: {props.character.status}</CharacterText>
    </CharacterBox>
  )
}

export default Character;