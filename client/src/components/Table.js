import './Card.css';
import DeepTable from './DeepTable';

const Table = ({ team }) => {
  
  return (
    <section>
      <article className='table-header'>
        <div className='mob-info'>Pos</div>
        <div className='mob-info'>Club</div>
        <div className='mob-info'>PG</div>
        <div className='full-view'>W</div>
        <div className='full-view'>D</div>
        <div className='full-view'>L</div>
        <div className='full-view'>GF</div>
        <div className='full-view'>GA</div>
        <div className='mob-info'>GD</div>
        <div className='mob-info'>P</div>
      </article>
      {team.table.map((e, key) => <DeepTable e={e} key={key}/>)}
    </section>
  )
};

export default Table;