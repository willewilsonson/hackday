import './Board.css';
import Card from './Card';
import Table from './Table';
import Matches from './Matches';
import { useState } from 'react';

const Board = ({ teams, tables, matches }) => {
  const [infoButton, setInfoButton] = useState('false');
  const [tableButton, setTableButton] = useState('true');
  const [matchButton, setMatchButton] = useState('true');

  const toggleHideInfo = () => {
    if (infoButton) {
      setInfoButton(false);
    } else {
      setInfoButton(true);
    }
  };

  const toggleHideTable = () => {
    if (tableButton) {
      setTableButton(false);
    } else {
      setTableButton(true);
    }
  };

  const toggleHideMatches = () => {
    if (matchButton) {
      setMatchButton(false);
    } else {
      setMatchButton(true);
    }
  };

  return (
    <>
      <section className={teams.length > 0 ? 'cards__info-buttons' : 'hide'}>
        <button className={infoButton ? 'card__info-button--hide': 'card__info-button--show'} onClick={() => toggleHideInfo()}>Team Info</button>
        <button className={tableButton ? 'card__info-button--hide': 'card__info-button--show'} onClick={() => toggleHideTable()}>Table</button>
        <button className={matchButton ? 'card__info-button--hide': 'card__info-button--show'} onClick={() => toggleHideMatches()}>Matches</button>
      </section>
      <section className='all-info'>
        <section className={infoButton ? 'hide' : ''}>
          <h1 className='info-header'>Team Info</h1>
          {teams.map((team, key) => <Card teams={teams} team={team} index={key} key={key}/>)}
        </section>
        <section className={tableButton ? 'hide' : ''}>
          <h1 className='info-header'>Table</h1>
          {tables.map((team, key) => <Table teams={teams} team={team} index={key} key={key}/>)}
        </section>
        <section className={matchButton ? 'hide' : ''}>
          <h1 className='info-header'>Next Round</h1>
          <article className='matchday'>
            <div className='matchday-info'>Date</div>
            <div className='matchday-info'>Home</div>
            <div className='matchday-info'>Away</div>
          </article>
          {matches.map((match, key) => <Matches teams={teams} match={match} index={key} key={key}/>)}
        </section>
      </section>
    </>
  )
};

export default Board;