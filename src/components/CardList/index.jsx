import React from 'react';
import { useFetch } from "../../hooks";
import Card from '../Card';
import './styles.css'

const CardList = () => {

   const data = useFetch("https://jsonplaceholder.typicode.com/users");


  if (!data) {
    return <div>Loading...</div>
  }
  else {
    return (
      <div className="card-list">
        {data.map((monster) => (
          //<h1 key={monsters.id}>{monsters.name}</h1>
          <Card key={monster.id} monsters={monster} />
        ))}
      </div>
    );
    }
};

export default CardList;