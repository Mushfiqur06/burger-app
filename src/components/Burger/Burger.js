import React from 'react'
import BurgerInGredient from './BurgerInGradient/BurgerInGradient'
import './Burger.css'

const burger = (props) => {
    let transformInGredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerInGredient key={igKey + i} type={igKey} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, [])

    if(transformInGredients.length === 0) {
        transformInGredients = <p>Please select adding ingredient!</p>
    }
    return(
        <div className="burger">
            <BurgerInGredient type="bread-top" />
            {transformInGredients}
            <BurgerInGredient type="bread-bottom" />
        </div>
    )
}

export default burger;