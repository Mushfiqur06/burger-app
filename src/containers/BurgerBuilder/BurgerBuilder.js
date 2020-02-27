import React, { Component } from 'react';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Aux from './../../hoc/Aux';

const INGREDIENT_PRICE = {
  salad: 1.4,
  bacon: 1.5,
  cheese: 0.4,
  meat: 1
};

class BurgerBuilder extends Component {
  state = {
    ingredient: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    },
    totalPice: 4
  };
  addIngredienHandler = type => {
    const oldCount = this.state.ingredient[type];
    const updateCount = oldCount + 1;

    const updatedIngradients = {
      ...this.state.ingredient
    };
    updatedIngradients[type] = updateCount;
    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPice: newPrice,
      ingredient: updatedIngradients
    });
  };
  removeIngredientHandler = type => {
    const oldCount = this.state.ingredient[type];
    if (oldCount <= 0) {
      return;
    }
    console.log('Hello');
    const updateCount = oldCount - 1;

    const updatedIngradients = {
      ...this.state.ingredient
    };
    updatedIngradients[type] = updateCount;
    const priceDeduction = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPice: newPrice,
      ingredient: updatedIngradients
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredient
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredient} />
        <BuildControls
          ingredientAdded={this.addIngredienHandler}
          ingredientRemove={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
