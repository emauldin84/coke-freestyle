import React from 'react'

import Drink from './Drink'

const DrinkDisplay = (props) => {
    return(
        <div className='container d-inline-block drinkDisplay'>
            <Drink mixedDrink={props.mixedDrink}/>
        </div>
    )
}

export default DrinkDisplay