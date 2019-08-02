import React from 'react'

const Drink = (props) => {
    console.log(props)
    let drinkColor = props.mixedDrink ? `rgb(${props.mixedDrink.r}, ${props.mixedDrink.g}, ${props.mixedDrink.b})` : null
    console.log(drinkColor)
    return(
        <div className='drinkContainer'>
            <div className="drink" style={{backgroundColor: drinkColor}}></div>
        </div>
    )
}

export default Drink