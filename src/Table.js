import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Table = () => {
    
  const [characters, setCharacter] = useState([]);
  // const [planets, setPlanets] = useState([]);
  // const [species, setSpecies] = useState([]);

const allCharacterPages = [
        'https://swapi.dev/api/people/?page=1',
        'https://swapi.dev/api/people/?page=2',
        'https://swapi.dev/api/people/?page=3',
        'https://swapi.dev/api/people/?page=4',
        'https://swapi.dev/api/people/?page=5',
        'https://swapi.dev/api/people/?page=6',
        'https://swapi.dev/api/people/?page=7',
        'https://swapi.dev/api/people/?page=8',
        'https://swapi.dev/api/people/?page=9',
]
useEffect(() => {
  axios.get('https://swapi.dev/api/people/').then(response => {
    const characterData = response.data
    setCharacter(characterData.results)
  })
  .catch(error => {
    console.log(error);
  });

},[]);
    return (
      <div>
        <div>
          <label>Search Characters :</label>
            <input type="search"></input>
             <button className="btn-sm btn-warning">Search</button>
          </div>
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
                        <th>{character.mass} </th>
                        <th>{character.height}</th>
                        <th>{character.homeworld}</th>
                        <th>{character.species == '' ? "Humanoid" : "Droid"}</th>
                      </tr>
                      ))}
                    </tbody>
              </table>
           </div>
         )
        
}

export default Table