import React from 'react';
import {images} from './data'

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
   
        return (
          <article key={id} className='person'>
              <img src={images.find(img => img.id === image).url} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
