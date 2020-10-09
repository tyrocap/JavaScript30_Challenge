import React, { Component } from "react";
import Auxa from "../../hoc/Auxa";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7,
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 4,
		purchasable: false,
		purchasing: false,
	};

	addIngredientHandler = (type) => {
		// update ingredient
		const updatedIngredient = this.state.ingredients[type] + 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedIngredient;

		// update price
		const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice,
		});
		this.updatePurchaseState(updatedIngredients);
	};

	removeIngredientHandler = (type) => {
		if (this.state.ingredients[type] < 1) {
			return;
		}
		// update ingredient
		const updatedIngredient = this.state.ingredients[type] - 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedIngredient;

		// update price
		const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice,
		});
		this.updatePurchaseState(updatedIngredients);
	};

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map((igKey) => {
				// creates an array from object key-value pairs
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				// sums all values in the array (initial value is 0, which is given at the end)
				return sum + el;
			}, 0);
		this.setState({ purchasable: sum > 0 });
	}

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = () => {
		alert("You continue!");
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients,
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		return (
			<Auxa>
				<Modal
					show={this.state.purchasing}
					modalClose={this.purchaseCancelHandler}
				>
					<OrderSummary
						ingredients={this.state.ingredients}
						totalPrice={this.state.totalPrice}
						purchaseCancelled={this.purchaseCancelHandler}
						purchaseContinued={this.purchaseContinueHandler}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}
					totalPrice={this.state.totalPrice}
					purchasable={this.state.purchasable}
					ordered={this.purchaseHandler}
				/>
			</Auxa>
		);
	}
}

export default BurgerBuilder;
