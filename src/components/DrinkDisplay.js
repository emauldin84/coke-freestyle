import React from 'react'

import Drink from './Drink'
import ClearCup from './ClearCup'

const DrinkDisplay = (props) => {
    return(
        <div className='container d-inline-block drinkDisplay'>
            <Drink mixedDrink={props.mixedDrink}/>
            <ClearCup clicked={props.clicked}/>
        </div>
    )
}

export default DrinkDisplay