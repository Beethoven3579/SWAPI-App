import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = ({characters}) => {
    const [text, setText] = useState('')
    
    useEffect(() => {
   
    const searchCharacter = async () => {
      const response = await axios.get(`https://swapi.dev/api/people/?search=${text}`);
    
      // return (
      //   <div>
      //  <tbody>
      //    {characters.map((character, index) => (
      //      <tr>
      //        <th>{character.name}</th>
      //        <th>{character.birth_year}</th>
      //        <th>{character.name}</th>
      //        </tr>
          
      //    ))}
         
      //  </tbody>
      //   </div>
      // )
      
    };

    searchCharacter()

  });

    return (
    <div className="container">
        <form>

        <div className="form-group row">
          <label id="search-label" className="col-sm-3 col-form-label text-warning">Find the Chosen Ones : </label>
            <div className="col-sm-6">
                <input 
                    type="text"  
                    className="form-control"
                    placeholder="Keyword..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            {/* <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <button className="btn btn-warning">Search</button>
                </div>
             </div> */}
          </form>
       
        </div>
    )
}

export default Search
