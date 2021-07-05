import './Card.css'

const DeepTimes = ({ t }) => {
  const day = t.split('T');
  return (
    <article className='team-position'>
      <div>{day[0]}</div>
    </article>
  )
};

export default DeepTimes;