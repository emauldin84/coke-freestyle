import React from 'react'

const Drink = (props) => {
    console.log(props)
    let drinkColor = props.mixedDrink ? `rgb(${props.mixedDrink.r}, ${props.mixedDrink.g}, ${props.mixedDrink.b})` : null
    console.log(drinkColor)
    return(
        <div className='drinkContainer'>
            <div className="drink" style={{backgroundColor: drinkColor}}>
                <div className="cube1">
                    <div className='outerDiv'>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                    </div>
                </div>
                <div className="cube2">
                    <div className='outerDiv'>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                    </div>
                </div>
                <div className="cube3">
                    <div className='outerDiv'>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                    </div>
                </div>
                <div className="cube4">
                    <div className='outerDiv'>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                        <div className='innerDiv'></div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Drink