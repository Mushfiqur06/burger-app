import React from 'react';
import Button from './../../UI/Button/Button';
import Aux from './../../../hoc/Aux';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    (igKey, index) => {
      return (
        <li key={index}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
          {props.ingredients[igKey]}
        </li>
      );
    }
  );
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button buttonType="danger" clicked={props.purchaseCanceled}>
        Cancel
      </Button>
      <Button buttonType="success" clicked={props.purchaseContinued}>
        Continue
      </Button>
    </Aux>
  );
};

export default orderSummary;
