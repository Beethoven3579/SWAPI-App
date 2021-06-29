import React, { useState, useEffect } from 'react'
// import axios from 'axios'

const Search = ({characters}) => {
  const [text, setText] = useState('')
    useEffect(() => {
   console.log(text)
    // const searchCharacter = async () => {
    //   const response = await axios.get(`https://swapi.dev/api/people/?search=${text}`);
    //   const characterData = response.data.results
      
      // characters.filter(character => {
      //   if (character.name.match(text)) {
      //     console.log(character.name)
          
      //   }
      // })
  
    // };

    // searchCharacter()

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
                    placeholder="Character Name..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
          </form>
       
        </div>
    )
}

export default Search
