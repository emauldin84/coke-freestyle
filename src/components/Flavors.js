import React from 'react'

const Flavors = (props) => {
    let flavors = props.flavors
    console.log(Object.entries(flavors))
    let flavorsDisplay = Object.entries(flavors).map(([flavor, color]) => {
        return (
            <div className='flavor' key={flavor} style={{backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`}}>
                <p>{flavor}</p>

            </div>

        )
    })
    console.log('flavorDisplay', flavorsDisplay)
    return (
        <div className='container d-flex flex-wrap justify-content-around' >
            {flavorsDisplay}
        </div>

    )
}

export default Flavors