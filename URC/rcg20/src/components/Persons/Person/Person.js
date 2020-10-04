import React from "react";
import "./Person.css";
import style from 'styled-components';

const person = (props) => {
	const style = {
		"@media (min-width: 500px)": {
			width: "450px",
		},
	};

	return (
		<div className="Person" style={style}>
			<p onClick={props.click}>My name is {props.name}</p>
			<p>My age is {props.age}</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
};

export default person;
