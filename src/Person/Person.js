import React from "react";
import styles from './Person.module.css'

const person = props => {
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
