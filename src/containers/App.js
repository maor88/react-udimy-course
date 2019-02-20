import React, { Component } from "react";
import styles from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";


class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Maor", age: 28 },
      { id: "2", name: "Idan", age: 30 },
      { id: "3", name: "Tomer", age: 31 }
    ],
    showPersons: false
  };

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = event => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked ={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }
    return (
      <div className={styles.App}>
        <Cockpit 
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked ={this.togglePersonsHandler}
          />
        {persons}
      </div>
    );
  }
}

export default App;
