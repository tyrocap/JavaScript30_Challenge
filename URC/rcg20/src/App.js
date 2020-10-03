import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
	state = {
		persons: [
			{ id: "ads13", name: "Max", age: 29 },
			{ id: "gwg34", name: "Adam", age: 26 },
			{ id: "rtv43", name: "Sarah", age: 23 },
		],
		otherState: "some other value",
		showPersons: false,
	};

	togglePersonsHandler = () => {
		this.setState({
			showPersons: !this.state.showPersons,
		});
	};

	nameChangeHandler = (event, id) => {
		// find the index through id
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});
		// make a copy of that person and change one of its properties
		const person = {
			...this.state.persons[personIndex],
		};
		person.name = event.target.value;

		// make a copy of the original object array and make a change in one of its objects
		const persons = [...this.state.persons];
		persons[personIndex] = person;

		// set the state to the new array of objects
		this.setState({ persons: persons });
	};

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	render() {
		const style = {
			backgroundColor: "white",
			font: "inherit",
			border: "1px solid blue",
			padding: "8px",
			cursor: "pointer",
		};

		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
								key={person.id}
								changed={(event) => this.nameChangeHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);
		}

		return (
			<div className="App">
				<h1>This is a React App</h1>
				<button style={style} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
