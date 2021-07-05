import './Card.css';
import DeepTimes from './DeepTimes';
import DeepMatches from './DeepMatches';

const Matches = ({ match, index }) => {
  const array = [];
  const matchArray = [...array, match.homeTeam, match.awayTeam];
  const timeArray = [...array, match.utcDate];
  return (
    <section>
      <article className='matches'>
       {timeArray.map((t, key) => <DeepTimes t={t} key={key}/>)}
       {matchArray.map((e, key) => <DeepMatches e={e} key={key}/>)}
      </article>

    </section>
  )
};

export default Matches;