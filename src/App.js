import React, { useState,useEffect } from 'react'
import List from './List'
import {Modal} from './Modal.js';
function App() {

  const [people, setPeople] = useState(() => {
    const peopleArr = window.localStorage.getItem('people');
    return peopleArr !== null
      ? JSON.parse(peopleArr)
      : [];
  });

  useEffect(() => {
    window.localStorage.setItem('people', JSON.stringify(people));
  }, [people]);

  const [show, showModal] = useState(false);

  const [person, setPerson] = useState(null);

  function addPerson(newValue) {
    setPeople([...people,newValue]);
  }

  function editPerson(person){
    setPerson(person)
    showModal(!show)
  }

  function updatePerson(person){
  
    let index = people.findIndex(p => person.id === p.id);
    people[index] = person;
    setPeople([...people]);
  }


  function deletePerson(id){
    let index = people.findIndex(p => id === p.id);
    people.splice(index, 1);
    setPeople([...people]);
  }

  
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} editPerson={editPerson} deletePerson={deletePerson}  />
        <button className='mainbutton' onClick={() => setPeople([])} >Clear All</button>
        <button className='mainbutton' onClick={() => showModal(!show)}>Add Person</button>
        <Modal show={show} showModal={showModal} peopleLength={people.length} person={person} setPerson={setPerson} addPerson={addPerson} updatePerson={updatePerson} />
      </section>
    </main>
  )
}

export default App
