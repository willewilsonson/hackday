import './Card.css';
import { useState } from 'react';

const Card = ({ team }) => {
  const [isActive, setActive] = useState('false');

  const toggleTeamInfo = () => {
    if (isActive === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <section className='team-info-view'>
      <article>
        <div className={isActive ? 'show' : 'hide'}>
          {team.name}
        </div>
      </article>
      <article>
        <div className={isActive ? 'hide cards__info' : 'show'}>
          <p className='card__team-name'>{team.name}</p>
          <p>Stadium:{team.venue}</p>
          <p>Founded: {team.founded}</p>
          <p>Colors: {team.clubColors}</p>
          <p>Website: {team.website}</p>
          <p>Address: {team.address}</p>
          <p>Phone: {team.phone}</p>
          {team.email ? <p>Email: {team.email}</p> : ''}
        </div>
      </article>
      <button 
        className={isActive ? 'card__info-button--show' : 'card__info-button--hide'}
        onClick={toggleTeamInfo}>
          {isActive ? '+' : '-'}
      </button>
    </section>
  )
};

export default Card;