import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
	{ label: "Salad", type: "salad" },
	{ label: "Bacon", type: "bacon" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Meat", type: "meat" },
];

const buildControls = (props) => (
	<div className="BuildControls">
		<p>
			Current Price: <strong>${props.totalPrice.toFixed(2)}</strong>
		</p>
		{controls.map((ctrl) => (
			<BuildControl
				// THIS IS AN IMPORTANT TO KNOW: WHEN YOU WANT TO PASS AN EVENT AND A PARAMETER,
				// USE THIS NOTATION, WHERE YOU PASS THE PARAMETER ALONG AT ANY POINT IN THE CHAIN
				added={() => props.ingredientAdded(ctrl.type)}
				removed={() => props.ingredientRemoved(ctrl.type)}
				key={ctrl.label}
				label={ctrl.label}
				disabled={props.disabled[ctrl.type]}
			/>
		))}
		<button className="OrderButton" disabled={!props.purchasable}>
			ORDER NOW
		</button>
	</div>
);

export default buildControls;
