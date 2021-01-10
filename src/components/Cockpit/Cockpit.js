import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // HTTP request
    setTimeout(() =>{
      alert('Saved data to Cloud!');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);   // empty array as 2nd argument

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Green;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>I'm awesome!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Ninjas
      </button>
    </div>
  );
}

export default React.memo(cockpit);   // renders only when IP changes