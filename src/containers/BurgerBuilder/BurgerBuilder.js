import React, { Component } from 'react';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';
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
    totalPice: 4,
    purchasable: false,
    purchasing: false
  };

  updatePurchasableState = ingredient => {
    const sum = Object.keys(ingredient)
      .map(igKey => {
        return ingredient[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({
      purchasable: sum > 0
    });
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
    this.updatePurchasableState(updatedIngradients);
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
    this.updatePurchasableState(updatedIngradients);
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  purchasingCancelHandler = () => {
    this.setState({ purchasing: false });
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
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchasingCancelHandler}
        >
          <OrderSummary ingredients={this.state.ingredient} />
        </Modal>
        <Burger ingredients={this.state.ingredient} />
        <BuildControls
          ingredientAdded={this.addIngredienHandler}
          ingredientRemove={this.removeIngredientHandler}
          purchasable={this.state.purchasable}
          disabled={disabledInfo}
          price={this.state.totalPice}
          ordered={this.purchasingHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
