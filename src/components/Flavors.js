import React from 'react'

const Flavors = (props) => {
    let flavors = props.flavors

    let flavorsDisplay = Object.entries(flavors).map(([flavor, color]) => {
        return (
            <div 
                className='flavor' 
                key={flavor} 
                style={{backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`}}
                onClick={() => props.onFlavorSelectHandler(flavor, color)}>
                <img src={color.logoUrl} alt={flavor} className='logo'></img>
                {/* <p>{flavor}</p> */}

            </div>

        )
    })

    return (
        <div className='container d-flex flex-wrap justify-content-around' >
            {flavorsDisplay}
        </div>

    )
}

export default Flavors