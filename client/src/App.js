import './App.css';
import { useState } from 'react';
import Searchbar from './components/Searchbar';

function App() {
  const [teams, setTeams] = useState([]);
  const [tables, setTables] = useState([]);
  const [matches, setMatches] = useState([]);

  const fetchTeams = id => {
    fetch(`/leagues/${id}`)
      .then(res => res.json())
      .then(data => setTeams(data))
      .catch(err =>  console.log(err.message));
  };

  const fetchTables = id => {
    fetch(`/standings/${id}`)
      .then(res => res.json())
      .then(data => setTables(data))
      .catch(err =>  console.log(err.message));
  };

  const fetchMatches = (id, day=1) => {
    fetch(`/matches/${id}/${day}`)
      .then(res => res.json())
      .then(data => setMatches(data))
      .catch(err =>  console.log(err.message));
  };

  return (
    <main className='app'>
      <header className='header__title'>
        <h1>Fotibol</h1>
      </header>
      <Searchbar 
        fetchTeams={fetchTeams}
        fetchTables={fetchTables}
        fetchMatches={fetchMatches}
        teams={teams}
        tables={tables}
        matches={matches}
      />
      <footer className='footer' ></footer>
    </main>
  );
}

export default App;


