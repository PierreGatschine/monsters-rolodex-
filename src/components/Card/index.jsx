import React from 'react';
import './styles.css'

const Card = (data) => {
    return (
        <div className='card-container'>
            <img alt='monster' src={`https://robohash.org/${data.monsters.id}?set=set2&size=180x180`}/>
            <h2>{data.monsters.name}</h2>
            <p>{data.monsters.email}</p>
        </div>
    );
};

export default Card;