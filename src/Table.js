import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Table = () => {
    
  const [characters, setCharacter] = useState([{}]);
  const [planets, setPlanets] = useState([{}]);
  const [species, setSpecies] = useState([{}]);


useEffect(() => {
  axios.get('https://swapi.dev/api/people/1')
  .then(response => {
    setCharacter(response.data)
  })
  axios.get('https://swapi.dev/api/planets/1')
  .then(response => {
      setPlanets(response.data)
  })
  axios.get('https://swapi.dev/api/species/1')
  .then(response => {
      setSpecies(response.data)
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
                      <tr className="table-light">
                        <th>{characters.name} </th>
                        <th>{characters.birth_year}</th>
                        <th>{characters.mass} </th>
                        <th>{characters.height}</th>
                        <th>{planets.name}</th>
                        <th>{species.name}</th>
                      </tr>
                    </tbody>
              </table>
           </div>
         )
        
}

export default Table