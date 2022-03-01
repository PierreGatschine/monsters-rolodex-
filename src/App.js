import { useEffect, useState } from 'react';
import './App.css';
import Monsters from './pages/monster/Index';

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const handleChange = e => setSearchTerm(e.target.value)
  
  useEffect(() => {
    const results = Monsters.filter(monster => monster.name.toLowerCase().include(searchTerm))
    setSearchResults(results)
  }, [searchTerm])

  return (
    <div className="App">
      <input 
        type='search' 
        placeholder='search monster'
        value={searchTerm}
        onChange={handleChange}
      />
      <Monsters />
    </div>
  );
}

export default App;
