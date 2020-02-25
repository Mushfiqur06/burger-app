import React from 'react'
import BurgerInGredient from './BurgerInGradient/BurgerInGradient'
import './Burger.css'

const burger = (props) => {
    return(
        <div className="burger">
            <BurgerInGredient type="bread-top" />
            <BurgerInGredient type="cheese" />
            <BurgerInGredient type="meat" />
            <BurgerInGredient type="bread-bottom" />
        </div>
    )
}

export default burger;