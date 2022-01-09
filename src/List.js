import React from 'react';
import {images} from './data'

const List = ({ people,editPerson,deletePerson}) => {

  function handlEditPerson(person){
    editPerson(person)
  }

  function handlDeletePerson(id){
    deletePerson(id)
  }

  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
   
        return (
          <article key={id} className='person'>
              <img src={images.find(img => img.id === image).url} alt={name} />
            <div className='flex justify-between'>
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
              <div className='flex justify-between items-center'>
                <span className="material-icons mr-1 cursor-pointer text-blue-400" onClick={() => handlEditPerson(person)}>
                  edit
                </span>
                <span className="material-icons cursor-pointer text-red-500" onClick={() => handlDeletePerson(id)}>
                delete
                </span>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
