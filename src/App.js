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

  const [show, showModal] = useState(false)

  function handleChange(newValue) {
    setPeople([...people,newValue]);
  }

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button className='mainbutton' onClick={() => setPeople([])}>Clear All</button>
        <button className='mainbutton' onClick={() => showModal(!show)}>Add Person</button>
        <Modal show={show} showModal={showModal} peopleLength={people.length} addPerson={handleChange} />
      </section>
    </main>
  )
}

export default App
