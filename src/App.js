import './App.css';
import Table from './components/Table.js'
import Search from './components/Search.js'
import Header from './components/Header.js'

function App() {
  return (
    <div className="App">
     <Header />
     <Search />
     <Table />
    </div>
  );
}

export default App;
