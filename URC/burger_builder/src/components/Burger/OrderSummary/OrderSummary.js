import React, { Component } from "react";
import Auxa from "../../../hoc/Auxa";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
	componentDidUpdate() {
		console.log("[OrderSummary] Did Update");
	}

	render() {
		const ingredientSummary = Object.keys(this.props.ingredients).map(
			(igKey) => {
				return (
					<li key={igKey}>
						<span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
						{this.props.ingredients[igKey]}
					</li>
				);
			}
		);
		return (
			<Auxa>
				<h3>Your Order: ${this.props.totalPrice.toFixed(2)}</h3>
				<p>A delicious burger with the following ingredients:</p>
				<ul>{ingredientSummary}</ul>
				<p>Continue to Checkout?</p>
				<Button btnType="Danger" clicked={this.props.purchaseCancelled}>
					CANCEL
				</Button>
				<Button btnType="Success" clicked={this.props.purchaseContinued}>
					CONTINUE
				</Button>
			</Auxa>
		);
	}
}

export default OrderSummary;
