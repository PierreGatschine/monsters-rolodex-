import React from 'react';
import './styles.css'

/* const Card = (data) => {
    return (
        <div className='card-container'>
            <img alt='monster' src={`https://robohash.org/${data.monsters.id}?set=set2&size=180x180`}/>
            <h2>{data.monsters.name}</h2>
            <p>{data.monsters.email}</p>
        </div>
    );
}; */

const Card = ({ monster }) => {
  const { id, name, email } = monster;

  return (
    <div className='card-container'>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;