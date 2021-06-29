import React, { useState, useEffect } from 'react'
// import axios from 'axios'

const Search = ({characters}) => {
  const [text, setText] = useState('')
    useEffect(() => {
   console.log(text)
   
      characters.filter(character => {
        if (character.name.toLowerCase().match(text.toLowerCase())) {
          console.log(character.name) 
        }
     })

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
