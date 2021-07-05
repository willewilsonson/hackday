import './Searchbar.css';
import Board from './Board';

const Searchbar = ({ fetchTeams, fetchTables, fetchMatches, teams, tables, matches }) => {

  const convertSearch = e => {
    const search = e.toUpperCase();
    if (search === 'PREMIERLEAGUE' || search === 'PREMIER LEAGUE') {
      return 'PL';
    }
    if (search === 'SERIEA' || search === 'SERIE A') {
      return 'SA';
    }
    if (search === 'PRIMERADIVISION' || search === 'PRIMERA DIVISION') {
      return 'PD';
    }
    if (search === 'BUNDESLIGA' || search === 'BUNDESLIGA1') {
      return 'BL1';
    } else {
      return search;
    }
  };
  
  const searchLeagues = e => {
    e.preventDefault();
    const keyword = e.target.elements.league.value.toUpperCase();
    const checkKeyword = convertSearch(keyword);
    fetchTeams(checkKeyword);
    fetchTables(checkKeyword);
    fetchMatches(checkKeyword);
  };

  return (
    <section className='searchbar'>
      <form autoComplete="off" id='searchbar__form' method="post" onSubmit={searchLeagues}>
        <input className='searchbar__input' type="text" name="league" placeholder="Search league..." />
        <input type="submit" value="Search" className='searchbar__submit-button'/>
      </form>
      <section className='cards'>
        <Board teams={teams} tables={tables} matches={matches}/>
      </section>
    </section>

  )
};

export default Searchbar;