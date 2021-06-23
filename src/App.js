import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Table from './components/Table.js'
import Search from './components/Search.js'
import Header from './components/Header.js'
import Pagination from './components/Pagination.js'


const App = ( ) => {
  const [characters, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(10);
  
useEffect(() => {
  let pageNumber = 1;

  const fetchCharacterData = async () => {
    
    while ( pageNumber < 10 ) {
    const response = await axios.get(`https://swapi.dev/api/people/?search=&page=${pageNumber}`);
    const characterData = response.data.results;
      characterData.forEach( async (character) => { 
        character.homeworld = await getHomeWorld(character);
        character.species = await getSpeciesName(character);
        setCharacter(characters => [...characters, character])
        
    }) 
    setIsLoading(false)
    pageNumber++
   }
  }
  fetchCharacterData()
},[]);


const getHomeWorld = async (character) => {
  character.homeworld = await axios.get(character.homeworld);
  return character.homeworld.data.name
}

const getSpeciesName = async (character) => {
  if (character.species.length === 0) {
    return (character.species = "Humaniod");
  }
  else{
  character.species = await axios.get(character.species);
  return character.species.data.name
  }
}

const indexOfLastCharacter = currentPage * charactersPerPage;
const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">

     <Header />
     <Search characters={characters}/>
     <Table 
      characters={currentCharacters} 
      isLoading={isLoading}
       />
     <Pagination 
      charactersPerPage={charactersPerPage}
      totalCharacters={characters.length}
      paginate={paginate}
       />  
     
    </div>
  );
}

export default App;
