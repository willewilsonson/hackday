import './Card.css'

const DeepTable = ({ e }) => {
  
  return (
    <article className='team-position'>
      <div className='mob-info'>{e.position}</div>
      <div className='mob-info'>{e.team.name}</div>
      <div className='mob-info'>{e.playedGames}</div>
      <div className='full-view'>{e.won}</div>
      <div className='full-view'>{e.draw}</div>
      <div className='full-view'>{e.lost}</div>
      <div className='full-view'>{e.goalsFor}</div>
      <div className='full-view'>{e.goalsAgainst}</div>
      <div className='mob-info'>{e.goalDifference}</div>
      <div className='mob-info'>{e.points}</div>
    </article>
  )
};

export default DeepTable;