import React, { useState, useEffect } from 'react';
import { API_URL } from './resources/api'
import Axios from 'axios'
import Character from './components/Character'
import './App.css';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterList, setCharacterList] = useState([])
  const [queryResults, setQueryResults] = useState([])
  const [pages, setPages] = useState(0)

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    Axios.get(`${API_URL}`)
      .then(response => {
        // console.log(response.data);
        setPages(response.data.info.pages)

        for (let page=1; page<=1; page++){
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


  function understandingEye() {
    // console.log('Results',characterList)
    // characterList.forEach(character => {
    //   console.log(character)
    // })
    // characterList.map(character => {
    //   <Character character={character} />
    // })
    // return(<Character character={characterList[0]} />)
    console.log(characterList)
  }

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {understandingEye()}
      {
        // characterList
        // characterList.map(character => {
        //   // console.log(character)
        //   <Character character={character} />
        // })
      }
      {/* <Character /> */}
    </div>
  );
}

export default App;
