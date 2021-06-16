import React, { useState } from 'react'

const Search = () => {
    const [text, setText] = useState('')

    return (
        <div>
             <section className="search">
        <form>
          <label>Search Characters :</label>
            <input 
                type="text"  
                className="form-control"
                placeholder="Character Search"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
             <button className="btn-sm btn-warning">Search</button>
          </form>
        </section>
        </div>
    )
}

export default Search
