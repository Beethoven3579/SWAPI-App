import React from 'react';

const Pagination = ({charactersPerPage, totalCharacters, paginate}) => {
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++ ) {
        pageNumbers.push(i)  
    }
        return (
            <nav>
                <ul className="pagination text-warning">Page Selection :  
                    {pageNumbers.map((number) => ( 
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number)} href="!#" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }      
  export default Pagination