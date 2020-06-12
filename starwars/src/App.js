import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { API_URL } from './resources/api'
import Axios from 'axios'
import Character from './components/Character'
import './App.css';


const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  max-height: 70vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  margin-top: 3%;
  background: #C1C1C1;
  opacity: 90%;
  border-radius: 20px;
  box-shadow: 0 0 5px black;
`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterList, setCharacterList] = useState([])
  const [queryResults, setQueryResults] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    Axios.get(`${API_URL}`)
      .then(response => {
        // console.log(response.data);
        const pages = response.data.info.pages

        for (let page=1; page<=2; page++){
          Axios.get(`${API_URL}?page=${page}`)
            .then(pageResponse => {
              pageResponse.data.results.forEach(resultItem => {
                // console.log(`Page: ${page}, ${resultItem}`)
                // setCharacterList(characterList.push(resultItem))
                setQueryResults(queryResults.push(resultItem))
              })
            })
            .catch(pageErr => {
              console.error(pageErr)
            })
        }
        // console.log(characterList)
        console.log(queryResults)
        setCharacterList(queryResults)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])


  function listCharacters() {
    return characterList.map(char => {
      return (<Character character={char} />)
    })
  }

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterContainer>
        {listCharacters()}
      </CharacterContainer>
    </div>
  );
}

export default App;
