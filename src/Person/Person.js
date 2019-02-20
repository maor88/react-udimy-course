import React from "react";
import styles from './Person.module.css'
import ErrorBoundary from "../ErrorBoundary/ErrorBoundry";

const person = props => {
  const rnd = Math.random();
  if(rnd > 0.1) {
    throw new Error ('Something went wrong');
  }
  return (
    <div className={styles.person} >
      <p onClick={props.click}>
        My name: {props.name} my age: {props.age}
      </p>
      <p>
          {props.children}
      </p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
};

export default person;
