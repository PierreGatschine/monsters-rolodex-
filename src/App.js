import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/search-box';
//import Monsters from './pages/monster/Index';

function App() {
  const [searchField, setSearcField] = useState("")
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)  
  
  console.log('rendered')

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField))
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = e => {
    const searchFieldString = e.target.value.toLowerCase()
    setSearcField(searchFieldString)
  }
  
  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className ='monsters-search-box' 
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
} 

export default App;
