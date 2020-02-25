import React from 'react'
import BurgerInGredient from './BurgerInGradient/BurgerInGradient'
import './Burger.css'

const burger = (props) => {
    const transformInGredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerInGredient key={igKey + i} type={igKey} />
        })
    })
    return(
        <div className="burger">
            <BurgerInGredient type="bread-top" />
            {transformInGredients}
            <BurgerInGredient type="bread-bottom" />
        </div>
    )
}

export default burger;