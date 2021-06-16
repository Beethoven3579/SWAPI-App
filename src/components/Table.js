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
  "When 900 years old you reach, look as good you will not hmmmm?....",
  "Trust your feelings...",
  "OOO Tini!!!!!....",
]

useEffect(() => {
  axios.get(`https://swapi.dev/api/people/`).then(response => {
    const characterData = response.data
    setCharacter(characterData.results)
    console.log(characterData)
    setIsLoading(false)
  })
  .catch(error => {
    console.log(error);
  });

},[]);
    return (
      <div>
               <table className="table">
                  <thead className="table table-dark">
                    <tr>
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
                      <tr className="table-light">
                        <th>{character.name} </th>
                        <th>{character.birth_year}</th>
                        <th>{character.mass + " Kg"} </th>
                        <th>{character.height + " cm"}</th>
                        <th>{character.homeworld}</th>
                        <th>{character.species == '' ? "Humanoid" : "Droid"}</th>
                      </tr>
                      ))}
                    </tbody>
              </table>
              {isLoading ?  <h1>{isLoadingQuotes[Math.floor(Math.random() * isLoadingQuotes.length)]}</h1> : false}
           </div>
         )       
}

export default Table