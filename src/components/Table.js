import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Table = () => {
   
  const [characters, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const isLoadingQuotes = [
    "Let the wookie win...",
    "That's no moon, its a space station...",
    "Shut him up or shut him down...",
    "May the force be with you, always...",
    "When 900 years old you reach, look as good you will not, hmmmm?....",
    "Trust your feelings...",
    "OOO Tini!!!!!...",
  ]

useEffect(() => {
  let pageNumber = 1;
  const fetchCharacterData = async () => {
    while( pageNumber < 10) {
    const response = await axios(`https://swapi.dev/api/people/?search=&page=${pageNumber}`);
    console.log(response)
    const characterData = response.data.results;
      characterData.forEach( async (character) => {
        character.homeworld = await getHomeWorld(character);
        character.species = await getSpeciesName(character);
        setCharacter(characters => [...characters, character])
    }) 
    setIsLoading(false)
    pageNumber++
   }
  }
  fetchCharacterData()
},[]);

const getHomeWorld = async (character) => {
  character.homeworld = await axios.get(character.homeworld);
  return character.homeworld.data.name
}

const getSpeciesName = async (character) => {
  if (character.species.length === 0) {
    return (character.species = "Humaniod");
  }
  else{
  character.species = await axios.get(character.species);
  return character.species.data.name
  }
}



    return (
      <div>
          <table className="table">
              <thead className="table table-dark">
                <tr className="text-warning">
                    <th>Name</th>
                    <th>Birth Year</th>
                    <th>Mass</th>
                    <th>Height</th>
                    <th>Home World</th>
                    <th>Species</th>
                    </tr>
                </thead>

                    <tbody >
                      {characters.map((character) => (
                      <tr className="table-dark text-warning">
                        <th>{character.name} </th>
                        <th>{character.birth_year}</th>
                        <th>{character.mass + " kg"} </th>
                        <th>{character.height + " cm"}</th>
                        <th>{character.homeworld}</th>
                        <th>{character.species}</th>
                      </tr>
                      ))}
                    </tbody>

              </table>
              {isLoading ?  <h1 className="text-warning" id="loadingQuote">{isLoadingQuotes[Math.floor(Math.random() * isLoadingQuotes.length)]}</h1> : false}
           </div>
         )       
}

export default Table