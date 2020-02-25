import React, { Component } from 'react';
import Burger from './../../components/Burger/Burger'
import Aux from './../../hoc/Aux'

class BurgerBuilder extends Component{
    state = {
        ingredient: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2 
        }
    }
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredient} />
                <div>Build Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;