// Write your Character component here
import React, {useState} from 'react'
import styled from 'styled-components'
import CharacterDetails from './CharacterDetails'


const CharacterDisplayBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid gray;
`
const PrimaryCharacterDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const CharacterText = styled.p`
  margin-left: 3%;
  margin-right: 3%;
`

const Character = (props) => {
  const [displayDetails, setDisplayDetails] = useState(false)
  
  const toggleDisplayDetails = () => setDisplayDetails(!displayDetails)

  return (
    <CharacterDisplayBox onClick={toggleDisplayDetails}>
      <PrimaryCharacterDisplay>
        <CharacterText>Name: {props.character.name}</CharacterText>
        <CharacterText>Status: {props.character.status}</CharacterText>
      </PrimaryCharacterDisplay>
      {displayDetails && <CharacterDetails image={props.character.image} species={props.character.species} type={props.character.type} origin={props.character.origin.name} location={props.character.location.name} />}
    </CharacterDisplayBox>
  )
}

export default Character;