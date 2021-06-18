import React, { useState } from 'react'

const Search = () => {
    const [text, setText] = useState('')
    
    // console.log("Text", text)

    return (
    <div className="container">
        <form>

        <div className="form-group row">
          <label className="col-sm-3 col-form-label text-warning">Search for Characters :</label>
            <div className="col-sm-6">
                <input 
                    type="text"  
                    className="form-control"
                    placeholder="Han Solo etc..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <button className="btn btn-warning">Search</button>
                </div>
             </div>
          </form>
       
        </div>
    )
}

export default Search
