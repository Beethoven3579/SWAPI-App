import React from 'react'

const Table = ({ characters, isLoading }) => {

  const isLoadingQuotes = [
    "Let the wookie win...",
    "That's no moon, its a space station...",
    "Shut him up or shut him down...",
    "May the force be with you, always...",
    "When 900 years old you reach, look as good you will not, hmmmm?....",
    "Trust your feelings...",
    "OOO Tini!!!!!...",
  ]
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
                  {characters.map((character, index) => (
                  <tr className="table-dark text-warning" key={index}>
                    <th>{character.name} </th>
                    <th>{character.birth_year}</th>
                    <th>
                      {character.mass === "unknown" ? 
                      "unknown" : character.mass + " kg"} 
                    </th>
                    <th>{character.height === "unknown" ?
                     "unknown" : character.height + " cm"}
                     </th>
                    <th>{character.homeworld}</th>
                    <th>{character.species}</th>
                  </tr>
                  ))}
                </tbody>
            </table>  
              {isLoading ?  
              <h1 className="text-warning" 
                  id="loadingQuote">
                  {isLoadingQuotes[Math.floor(Math.random() * isLoadingQuotes.length)]}
              </h1> : 
              false} 
           </div>       
      ) 
}

export default Table