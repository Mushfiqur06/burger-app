import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './BurgerInGradient.css'

class BurgerInGradient extends Component{
    render(){
        let ingredient = null;

        switch(this.props.type){
            case('bread-bottom'):
                ingredient = <div className="bread_bottom"></div>;
                break;
            case('bread-top'): 
                ingredient = (
                    <div className="breadTop">
                        <div className="seedS1"></div>
                        <div className="seedS2"></div>
                    </div>
                )

                break;

            case('meat'):
                    ingredient = <div className="meat"></div>
                    break;
            case('cheese'):
                ingredient = <div className="cheese"></div>
                break;
            case('bacon'):
                ingredient = <div className="bacon"></div>
                break;

            case('salad'):
                ingredient = <div className="salad"></div>
                break;
            default:
                ingredient = null
        }

        return ingredient
    }
}

BurgerInGradient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerInGradient;